import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

/**
 * 菜单链接
 * @param {*} param0
 * @returns
 */
export const MenuItem = ({ link, textColor = '' }) => {
  const hasSubMenu = link?.subMenus?.length > 0
  const router = useRouter()

  // 管理子菜单的展开状态
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prev => !prev) // 切换子菜单状态
  }

  return (
    <>
      {/* 普通 MenuItem */}
      {!hasSubMenu && (
        <li className='group relative whitespace-nowrap'>
          <Link
            href={link?.href}
            target={link?.target}
            className={`ud-menu-scroll mx-8 flex py-2 text-sm font-medium group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 ${textColor}`}>
            {link?.icon && <i className={link.icon + ' mr-2 my-auto'} />}
            {link?.name}
          </Link>
        </li>
      )}

      {/* 有子菜单的 MenuItem */}
      {hasSubMenu && (
        <li className='submenu-item group relative whitespace-nowrap'>
          <button
            onClick={toggleSubMenu}
            className={`cursor-pointer relative px-8 flex items-center justify-between py-2 text-sm font-medium group-hover:text-primary lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:group-hover:opacity-70 xl:ml-10 ${textColor}`}>
            <span>
              {link?.icon && <i className={link.icon + ' mr-2 my-auto'} />}
              {link?.name}
            </span>

            <svg className={`ml-2 w-3 h-3 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''} ${textColor}`} fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </button>

          {isSubMenuOpen && (
            <ul className='absolute left-0 top-full mt-2 w-40 rounded-lg bg-white shadow-lg dark:bg-dark-2 z-50'>
              {link.subMenus.map((sub, idx) => (
                <li key={idx}>
                  <Link href={sub.href} className={`block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${textColor}`}>
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      )}
    </>
  )
}
