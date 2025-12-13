import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { LuBookText } from 'react-icons/lu'

interface DocsLinkProps {
  href: string
  children: ReactNode
}

const DocsLink: FC<DocsLinkProps> = ({ href, children }) => {
  return (
    <div className="flex flex-row gap-2 place-items-center cursor-pointer">
      <LuBookText />
      <Link href={href} target="_blank" className="text-dark-gray  no-underline hover:underline">
        {children}
      </Link>
    </div>
  )
}

export default DocsLink
