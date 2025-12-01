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
    signin: NavItem
  }
}

export const navigationConfig: NavigationConfig = {
  items: [
    {
      label: 'Platform',
      dropdown: {
        sections: [
          {
            items: [
              {
                label: 'Flows',
                href: '/flows',
                description: 'Building your data pipeline',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Blocks',
                href: '/products',
                description: 'They make Ziggy so friendly - build your own to connect to your platform',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Extend & Customize',
                href: '/extend',
                description: 'Extend Ziggy with your own Custom Blocks',
                icon: '/nav/flow.svg',
              },
              {
                label: 'System features',
                href: '/features',
                description: 'Everything you need to support integration and migration flows',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Ziggy Cluster',
                href: '/cluster',
                description: 'Scaling and high availability',
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
            title: 'General',
            items: [
              {
                label: 'Integrations',
                href: '/solutions',
                description: 'Trigger Ziggy Flows when data changes in any system',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Migrations',
                href: '/solutions',
                description: 'Move any amount of data between systems',
                icon: '/nav/flow.svg',
              },
            ],
          },
          {
            title: 'Sector',
            items: [
              {
                label: 'HubSpot',
                href: '/solutions',
                description: 'Building Ziggy flows for HubSpot',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Internet of Things',
                href: '/solutions',
                description: 'Store data anywhere at any scale, send messages to devices',
                icon: '/nav/flow.svg',
              },
            ],
          },
        ],
      },
    },
    {
      label: 'Integration Partners',
      dropdown: {
        sections: [
          {
            items: [
              {
                label: 'About integration partners',
                href: '/integration-partners',
                description: 'What is an Integration Partner?',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Integrating with your platform',
                href: '/developers',
                description: 'Building custom blocks that talk to your platform',
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
                href: '/resources',
                description: 'Ziggy product documentation',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Professional Services',
                href: '/resources',
                description: 'Support, training and Ziggy related services',
                icon: '/nav/flow.svg',
              },
            ],
          },
        ],
      },
    },
    { label: 'Pricing', href: '/pricing' },
  ],
  cta: {
    contact: { label: 'Book a demo', href: '/contact' },
    signin: { label: 'Sign in', href: '/signin' },
  },
}
