'use client'

import { NavItemWithDropdown } from '@/components/navigation/navigation'
import DropdownNavItem from './DropdownNavItem'

interface DesktopDropdownContainerProps {
  activeDropdown: string | null
  dropdownContent: NavItemWithDropdown | null
  isTransitioning: boolean
  dropdownPosition: number
  closeTimeoutRef: React.MutableRefObject<NodeJS.Timeout | null>
  onMouseLeave: () => void
  onItemClick: () => void
}

const DesktopDropdownContainer = ({
  activeDropdown,
  dropdownContent,
  isTransitioning,
  dropdownPosition,
  closeTimeoutRef,
  onMouseLeave,
  onItemClick,
}: DesktopDropdownContainerProps) => {
  if (!activeDropdown || !dropdownContent?.dropdown) {
    return null
  }

  return (
    <div
      className="hidden md:block absolute left-0 right-0"
      style={{ top: 'calc(100% - 12px)', paddingTop: '12px' }}
      onMouseEnter={() => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current)
          closeTimeoutRef.current = null
        }
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-lg shadow-xl bg-white border border-gray-100 py-4 inline-block min-w-[280px] transition-all duration-300 ease-out"
          style={{
            marginLeft: `${dropdownPosition}px`,
            transform: 'translateX(-50%)',
          }}
          onMouseLeave={onMouseLeave}>
          {/* Arrow pointing up */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

          <div
            className={`transition-opacity duration-400 relative flex flex-col gap-4 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
            {dropdownContent.dropdown.sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {section.title && (
                  <div className="px-4 mb-2">
                    <h3 className="text-xs font-semibold text-stripe-gray uppercase tracking-wide">
                      {section.title}
                    </h3>
                  </div>
                )}
                <div className="px-2">
                  {section.items.map(subItem => (
                    <DropdownNavItem key={subItem.label} subItem={subItem} onClick={onItemClick} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopDropdownContainer
