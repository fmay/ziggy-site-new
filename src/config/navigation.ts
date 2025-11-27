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
      label: 'Product',
      dropdown: {
        sections: [
          {
            title: 'Core',
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
                description: 'Make Ziggy so friendly - build your own to connect to your platform',
                icon: '/nav/flow.svg',
              },
              {
                label: 'System features',
                href: '/products',
                description: 'Everything you need to support integration and migration flows',
                icon: '/nav/flow.svg',
              },
            ],
          },
          {
            title: 'Advanced',
            items: [
              {
                label: 'Ziggy Cluster',
                href: '/products',
                description: 'Scaling and high availability',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Extend',
                href: '/products',
                description: 'Build your own Custom Blocks',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Internet of Things',
                href: '/products',
                description: 'Messaging and MQTT Blocks',
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
                label: 'Integration Partners',
                href: '/solutions',
                description: 'White label Ziggy and build a new revenue stream',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Migrations',
                href: '/solutions',
                description: 'Move any amount of data between systems',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Integrations',
                href: '/solutions',
                description: 'Trigger Ziggy Flows when data changes in any system',
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
      label: 'Developers',
      dropdown: {
        sections: [
          {
            items: [
              {
                label: 'Documentation',
                href: '/developers',
                description: 'Read our documentation',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Custom Block development',
                href: '/developers',
                description: 'Build custom blocks to talk to your platform',
                icon: '/nav/flow.svg',
              },
              {
                label: 'CLI',
                href: '/developers',
                description: 'For Block development and system administration',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Source code',
                href: '/developers',
                description: 'Available upon request',
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
                description: 'Latest updates and insights',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Professional Services',
                href: '/resources',
                description: 'Best practices and tutorials',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Support',
                href: '/resources',
                description: 'Stay up to date',
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
    contact: { label: 'Contact sales', href: '/contact' },
    signin: { label: 'Sign in', href: '/signin' },
  },
}
