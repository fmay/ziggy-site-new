import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

async function submitToHubSpot(data: {
  firstName: string
  lastName: string
  email: string
  company: string
  message?: string
}) {
  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formGuid = process.env.HUBSPOT_FORM_GUID

  if (!portalId || !formGuid) {
    console.warn('HubSpot credentials not configured')
    return
  }

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: data.firstName },
          { name: 'lastname', value: data.lastName },
          { name: 'email', value: data.email },
          { name: 'company', value: data.company },
          { name: 'message', value: data.message || '' },
        ],
      }),
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`HubSpot submission failed: ${errorText}`)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'info@ziggyplatform.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Company: ${company}

Message:
${message || 'No message provided'}
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <h3>Message:</h3>
        <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
      `,
    }

    // Send email and submit to HubSpot in parallel
    const [emailResult, hubspotResult] = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      submitToHubSpot({ firstName, lastName, email, company, message }),
    ])

    // Log HubSpot errors but don't fail the request (email is primary)
    if (hubspotResult.status === 'rejected') {
      console.error('HubSpot submission error:', hubspotResult.reason)
    }

    // Fail if email sending failed
    if (emailResult.status === 'rejected') {
      throw emailResult.reason
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
