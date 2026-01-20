import Link from 'next/link'
import { FileText } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <span className="font-display font-semibold text-neutral-900">
                Planning Pack
              </span>
            </div>
            <p className="text-sm text-neutral-600 max-w-md">
              Complete monorepo structure for planning, executing, and delivering technical projects.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-neutral-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/planning/0-Master-Index" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Planning Sections
                </Link>
              </li>
              <li>
                <Link href="/docs/getting-started" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Getting Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-neutral-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs/quick-reference" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Quick Start
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  README
                </Link>
              </li>
              <li>
                <Link href="/docs/quick-reference" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Reference Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} Project Planning Starter Pack. Built for high-velocity technical execution.
          </p>
        </div>
      </div>
    </footer>
  )
}

