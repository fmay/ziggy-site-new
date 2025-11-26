import Link from 'next/link'
import { NavItemWithDropdown } from '@/config/navigation'
import DropdownNavItem from './DropdownNavItem'

interface MobileNavItemProps {
  item: NavItemWithDropdown
  mobileExpandedItem: string | null
  toggleMobileItem: (label: string) => void
  setMobileMenuOpen: (open: boolean) => void
}

const MobileNavItem = ({
  item,
  mobileExpandedItem,
  toggleMobileItem,
  setMobileMenuOpen,
}: MobileNavItemProps) => {
  if (item.dropdown) {
    const isExpanded = mobileExpandedItem === item.label

    return (
      <div key={item.label}>
        <button
          onClick={() => toggleMobileItem(item.label)}
          className="w-full flex items-center justify-between text-stripe-navy hover:text-stripe-purple transition-colors duration-200 py-2"
          aria-expanded={isExpanded}>
          <span>{item.label}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-[400ms]`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
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

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="pl-4 pb-2 space-y-2 pt-2">
            {item.dropdown.sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {section.title && (
                  <div className="text-xs font-semibold text-stripe-gray uppercase tracking-wide mt-2 mb-1">
                    {section.title}
                  </div>
                )}
                {section.items.map(subItem => (
                  <DropdownNavItem
                    key={subItem.label}
                    subItem={subItem}
                    variant="mobile"
                    onMobileClick={() => setMobileMenuOpen(false)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link
      key={item.label}
      href={item.href!}
      className="text-stripe-navy hover:text-stripe-purple transition-colors duration-200 py-2 block"
      onClick={() => setMobileMenuOpen(false)}>
      {item.label}
    </Link>
  )
}

export default MobileNavItem
