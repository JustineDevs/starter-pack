'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, FileText, Github } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Documentation' },
  { href: '/docs/planning-framework', label: 'Planning' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center transform transition-transform group-hover:scale-105">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="font-display font-semibold text-neutral-900 text-lg">
              Planning Pack
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname?.startsWith(item.href))
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <a
              href="https://github.com/JustineDevs/starter-pack"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all duration-200"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname?.startsWith(item.href))
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <a
              href="https://github.com/JustineDevs/starter-pack"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

