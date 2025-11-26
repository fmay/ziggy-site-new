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
  desktop: NavItemWithDropdown[]
  mobile: NavItemWithDropdown[]
  cta: {
    contact: NavItem
    signin: NavItem
  }
}

export const navigationConfig: NavigationConfig = {
  desktop: [
    {
      label: 'Product',
      dropdown: {
        sections: [
          {
            title: 'Core',
            items: [
              {
                label: 'Flows',
                href: '/products',
                description: 'Building your data pipeline',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Blocks',
                href: '/products',
                description: 'What makes Ziggy so friendly',
                icon: '/nav/flow.svg',
              },
              {
                label: 'Rate Limiting Queues',
                href: '/products',
                description: 'Protect APIs and overloads',
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
                description: 'White labelling Ziggy',
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
  mobile: [
    {
      label: 'Products',
      dropdown: {
        sections: [
          {
            title: 'Payments',
            items: [
              { label: 'Payment Processing', href: '/products' },
              { label: 'Checkout', href: '/products' },
              { label: 'Payment Links', href: '/products' },
            ],
          },
          {
            title: 'Business Operations',
            items: [
              { label: 'Billing', href: '/products' },
              { label: 'Invoicing', href: '/products' },
              { label: 'Tax', href: '/products' },
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
              { label: 'Startups', href: '/solutions' },
              { label: 'Enterprise', href: '/solutions' },
              { label: 'SaaS', href: '/solutions' },
              { label: 'Platforms', href: '/solutions' },
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
              { label: 'Documentation', href: '/developers' },
              { label: 'API Reference', href: '/developers' },
              { label: 'Support', href: '/developers' },
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
              { label: 'Blog', href: '/resources' },
              { label: 'Guides', href: '/resources' },
              { label: 'Newsletter', href: '/resources' },
            ],
          },
        ],
      },
    },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact sales', href: '/contact' },
  ],
  cta: {
    contact: { label: 'Contact sales', href: '/contact' },
    signin: { label: 'Sign in', href: '/signin' },
  },
}
