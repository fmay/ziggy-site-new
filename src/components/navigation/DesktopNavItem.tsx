import Link from 'next/link'
import { NavItemWithDropdown } from '@/config/navigation'

interface DesktopNavItemProps {
  item: NavItemWithDropdown
  index: number
  activeDropdown: string | null
  onMouseEnter: (label: string, item: NavItemWithDropdown, element: HTMLElement) => void
}

const DesktopNavItem = ({ item, index, activeDropdown, onMouseEnter }: DesktopNavItemProps) => {
  if (item.dropdown) {
    const isActive = activeDropdown === item.label

    return (
      <div
        key={item.label}
        className={index > 0 ? 'ml-8' : ''}
        onMouseEnter={e => onMouseEnter(item.label, item, e.currentTarget)}>
        <button
          className={`text-stripe-navy hover:text-stripe-purple transition-colors duration-200 flex items-center ${
            isActive ? 'text-stripe-purple' : ''
          }`}
          aria-expanded={isActive}>
          {item.label}
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-[400ms] ${
              isActive ? 'rotate-180' : ''
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div key={item.label} className={`f${index > 0 ? 'ml-8' : ''}`}>
      <Link
        href={item.href!}
        className="text-stripe-navy hover:text-stripe-purple transition-colors duration-200">
        {item.label}
      </Link>
    </div>
  )
}

export default DesktopNavItem
