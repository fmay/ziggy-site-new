export interface NavItem {
  label: string
  href: string
  description?: string
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
                description: 'Accept payments online',
              },
              { label: 'Blocks', href: '/products', description: 'Pre-built payment form' },
              { label: 'Rate Limiting Queues', href: '/products', description: 'No-code payment pages' },
              { label: 'Platform Blocks', href: '/products', description: 'No-code payment pages' },
              { label: 'Ziggy Cluster', href: '/products', description: 'No-code payment pages' },
              { label: 'Internet of Things', href: '/products', description: 'No-code payment pages' },
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
              { label: 'Startups', href: '/solutions', description: 'Launch and scale faster' },
              {
                label: 'Enterprise',
                href: '/solutions',
                description: 'Built for complex businesses',
              },
              { label: 'SaaS', href: '/solutions', description: 'Subscription billing' },
              { label: 'Platforms', href: '/solutions', description: 'Marketplace solutions' },
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
              { label: 'Documentation', href: '/developers', description: 'Start integrating' },
              { label: 'API Reference', href: '/developers', description: 'Complete API docs' },
              { label: 'Support', href: '/developers', description: 'Get help from our team' },
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
              { label: 'Blog', href: '/resources', description: 'Latest updates and insights' },
              { label: 'Guides', href: '/resources', description: 'Best practices and tutorials' },
              { label: 'Newsletter', href: '/resources', description: 'Stay up to date' },
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
