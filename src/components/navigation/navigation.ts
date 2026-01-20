export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: string
}

export interface NavItemWithDropdown {
  label: string
  href?: string
  dropdown?: {
    sections: {
      title?: string
      items: NavItem[]
    }[]
  }
}

export interface NavigationConfig {
  items: NavItemWithDropdown[]
  cta: {
    contact: NavItem
    bookDemo?: NavItem
  }
}

export const navigationConfig: NavigationConfig = {
  items: [
    {
      label: 'Platform',
      href: '/platform',
      dropdown: {
        sections: [
          {
            title: 'Overview',
            items: [
              {
                label: 'Platform Introduction',
                href: '/platform',
                description: 'An overview of the Ziggy platform, how we use AI and customization.',
                icon: '/nav/flow.svg',
              },
              {
                label: 'What are Automations and Integrations',
                href: '/what-are-automations',
                description: 'What they are and some concrete examples',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Feature overview',
                href: '/features',
                description: "Ziggy's key features at a high level",
                icon: '/nav/flow.svg',
              },
            ],
          },

          {
            title: 'How it works',
            items: [
              {
                label: 'Ziggy Blocks and Ziggy Flows',
                href: '/flows',
                description: 'Ziggy Blocks and single, simple responsibilities',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Customization',
                href: '/extend',
                description: 'Extend Ziggy with your own Custom Blocks',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Laptop, Server or Cluster',
                href: '/cluster',
                description: 'Ziggy is quickly installed on laptops, servers or clusters.',
                icon: '/nav/flow.svg',
              },
            ],
          },
        ],
      },
    },
    {
      label: 'Solutions',
      dropdown: {
        sections: [
          {
            items: [
              {
                label: 'CRM',
                href: '/solutions/crm',
                description: 'Integrations. automations and migrations for your CRM',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Internet of Things',
                href: '/solutions/iot',
                description: 'Handle IoT messages at scale, processing data with Ziggy Flows',
                icon: '/nav/flow.svg',
              },
            ],
          },
        ],
      },
    },
    {
      label: 'Partners',
      dropdown: {
        sections: [
          {
            items: [
              {
                label: 'Integration Partners',
                href: '/partners/integration-partners',
                description: 'Multi-tenant platform offering Ziggy integrations to your customers',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Resellers & Agencies',
                href: '/partners/reseller',
                description: 'Generate revenue from Ziggy-centric services and sales',
                icon: '/nav/flow.svg',
              },
            ],
          },
        ],
      },
    },
    {
      label: 'Resources',
      dropdown: {
        sections: [
          {
            items: [
              {
                label: 'Docs',
                href: 'https://docs.ziggyplatform.com',
                description: 'Ziggy product documentation',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Professional Services',
                href: 'pricing#services',
                description: 'Support, training and Ziggy related services',
                icon: '/nav/flow.svg',
              },
            ],
          },
        ],
      },
    },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About Us', href: '/about' },
  ],
  cta: {
    bookDemo: { label: 'Book Demo', href: '/demo' },
    contact: { label: 'Contact Us', href: '/contact' },
  },
}
