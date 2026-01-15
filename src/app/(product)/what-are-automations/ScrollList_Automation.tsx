import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'
import DocsLink from '@/components/ui/docs-link/DocsLink'
import Intro from '@/components/ui/intro/Intro'

const ScrollListAutomation: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      title: 'Example 1 (step 1) : an email is sent to support@yourcompany.com',
      content: (
        <div>
          <p>
            Configure Ziggy's Messaging to monitor an email address. Each email then triggers a
            Ziggy Flow
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/Messaging">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/images/what-automation/example-1a.webp',
      contentNudge: 0,
    },
    {
      title: 'Example 1 (step 2) - Triggered flow',
      content: (
        <div>
          <p>
            The Ziggy flow receives the email data then uses the <strong>AI Generate</strong> block
            to calculate a happiness score and categorize the contents before creating a new ticket
            in your CRM.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/block-types/ai/ai-generate">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/images/what-automation/example-1b.webp',
      contentNudge: 90,
    },
    {
      title: 'Example 1 (step 3) - AI Generate',
      content: (
        <div>
          <p>
            The AI Generate block lets you configure a prompt that does whatever you need it to do.
            It puts the result onto the output edge as you request.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/block-types/ai/ai-generate">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/images/what-automation/example-1c.webp',
      contentNudge: 90,
    },
    {
      title: 'Example 2 : Message Queue processing',
      content: (
        <div>
          <p>A company application uses a Queue/Event Stream to send notifications.</p>
          <p>
            This example shows Ziggy configured to listen to two Redis Stream Events and then launch
            a flow, passing in the event data.
          </p>
          <p>
            The triggered Flow can do anything you require - transform data, store in multiple
            systems, send alerts and notifications etc.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/Messaging">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/images/what-automation/example-2.webp',
      contentNudge: 0,
    },
    {
      title: 'Example 3 : Scheduled SFTP/CSV load',
      content: (
        <div>
          <p>
            You want to read a CSV file stored on an SFTP server every day at 6am, 12pm and 6pm.
          </p>
          <p>
            Ziggy's Scheduler launches a flow that reads the CSV file from the SFTP server then
            processes as you require with further Ziggy blocks.
          </p>
          <DocsLink href="http://docs.ziggyplatform.com/user-guide/block-types/utility/file-reader-writer">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/what-are-automations/schedule.webp',
      contentNudge: 70,
    },
  ]
  return (
    <>
      <Intro
        className="mb-[30px]"
        title="Automation Examples"
        description="The list of possible Automations is endless. Trigger a Ziggy Flow when any messaging system receives a notification"
      />
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListAutomation
