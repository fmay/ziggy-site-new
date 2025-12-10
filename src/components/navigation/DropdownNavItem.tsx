import Link from 'next/link'
import Image from 'next/image'

interface DropdownSubItem {
  label: string
  icon?: string
  href: string
  description?: string
}

interface DropdownNavItemProps {
  subItem: DropdownSubItem
  variant?: 'desktop' | 'mobile'
  onMobileClick?: () => void
}

const DropdownNavItem = ({ subItem, variant = 'desktop', onMobileClick }: DropdownNavItemProps) => {
  const isMobile = variant === 'mobile'

  return (
    <div className={`dropdown-item ${isMobile ? 'mobile-dropdown-item' : ''}`}>
      {subItem.icon && <img src={subItem.icon} alt="Flow icon" width={30} height={20} />}
      <Link
        key={subItem.label}
        href={subItem.href}
        className=""
        onClick={onMobileClick}
        {...(subItem.href.includes('http') && { target: '_blank', rel: 'noopener noreferrer' })}>
        <div className={`label ${isMobile ? 'text-white' : ''}`}>{subItem.label}</div>
        {subItem.description && (
          <div className={`description ${isMobile ? 'text-white' : ''}`}>{subItem.description}</div>
        )}
      </Link>
    </div>
  )
}

export default DropdownNavItem
