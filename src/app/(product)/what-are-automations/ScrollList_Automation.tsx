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
      title: 'Example 1 : an email is sent to support@yourcompany.com',
      content: (
        <div>
          <p>
            Configure Ziggy's Messaging to monitor an email address. Each email then triggers a
            Ziggy Flow
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Launching-flows">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/postman.webp',
      contentNudge: 0,
    },
    {
      title: 'Process the email',
      content: (
        <div>
          <p>
            The Ziggy flow receives all the email data then uses the <strong>AI Generate</strong>{' '}
            block to calculate a happiness score and categorize the contents before assigning it to
            the right person and storing the data in the your Helpdesk system and CRM.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Monitoring">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/execution-history.webp',
      contentNudge: 90,
    },
    {
      title: 'Example 2 : Message queue processing',
      content: (
        <div>
          <p>Your application uses a Queue/Event Stream to send notifications to other systems.</p>
          <p>
            Configure Ziggy Messaging to listen to Queue events and trigger a Flow on each
            notification.
          </p>
          <p>
            The Flow can do anything you require - trasform data, store in multiple systems, send
            alerts and notifications etc.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Dev-Prod-Modes">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/dev-prod.webp',
      contentNudge: 0,
    },
    {
      title: 'Example 3 : Scheduled SFTP/CSV load',
      content: (
        <div>
          <p>You want to read a CSV file stored on an SFTP server every day at 6am, 12pm and 6pm.</p>
          <p>
            Ziggy's Scheduler lets you launch flows on any schedule.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Dev-Prod-Modes">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/dev-prod.webp',
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
