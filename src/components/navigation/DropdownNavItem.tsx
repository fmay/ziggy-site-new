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
  return (
    <div className="dropdown-item">
      {subItem.icon && <img src={subItem.icon} alt="Flow icon" width={30} height={20} />}
      <Link
        key={subItem.label}
        href={subItem.href}
        className="">
        <div className="label">{subItem.label}</div>
        {subItem.description && (
          <div className="description">{subItem.description}</div>
        )}
      </Link>
    </div>
  )
}

export default DropdownNavItem
