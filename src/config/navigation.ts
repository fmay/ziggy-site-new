export interface NavItem {
  label: string
  href: string
}

export interface NavigationConfig {
  desktop: NavItem[]
  mobile: NavItem[]
  cta: {
    contact: NavItem
    signin: NavItem
  }
}

export const navigationConfig: NavigationConfig = {
  desktop: [
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Developers', href: '/developers' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
  ],
  mobile: [
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Developers', href: '/developers' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact sales', href: '/contact' },
  ],
  cta: {
    contact: { label: 'Contact sales', href: '/contact' },
    signin: { label: 'Sign in', href: '/signin' },
  },
}
