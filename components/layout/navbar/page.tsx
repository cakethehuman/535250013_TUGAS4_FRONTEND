'use client'

import '@/app/css/navbar.css'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (href: string) =>
    `text-decoration-none px-2 py-2 rounded link-style ${pathname === href ? 'active-link' : ''}`

  return (
    <>
      <div className='d-flex navbar-style justify-content-center'>
        <div className="d-flex align-items-center gap-4">
          <Link
            href='/'
            className={linkClass('/')}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            href='/perlombaan'
            className={linkClass('/perlombaan')}
            aria-current={pathname === '/perlombaan' ? 'page' : undefined}
          >
            Perlombaan
          </Link>
          <Link
            href='/hubungi'
            className={linkClass('/hubungi')}
            aria-current={pathname === '/hubungi' ? 'page' : undefined}
          >
            Hubungi
          </Link>
        </div>
      </div>
    </>
  );
}
