import Link from 'next/link'
import { 
  Rocket, 
  ClipboardList, 
  Settings, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  Target, 
  HelpCircle,
  ArrowRight,
  Home,
  FileText
} from 'lucide-react'

const docs = [
  {
    title: 'Getting Started',
    description: 'Quick setup and overview of the system',
    href: '/docs/getting-started',
    icon: Rocket,
  },
  {
    title: 'Planning Framework',
    description: 'Complete 12-section planning framework',
    href: '/docs/planning-framework',
    icon: ClipboardList,
  },
  {
    title: 'Technical Guide',
    description: 'Technical execution and implementation guide',
    href: '/docs/technical-guide',
    icon: Settings,
  },
  {
    title: 'Claude Skills',
    description: 'AI-powered skills for project management',
    href: '/docs/claude-skills',
    icon: Sparkles,
  },
  {
    title: 'Quick Reference',
    description: 'Daily cheat sheet and quick lookup',
    href: '/docs/quick-reference',
    icon: BookOpen,
  },
  {
    title: 'Use Cases',
    description: 'Real-world examples and scenarios',
    href: '/docs/use-cases',
    icon: Lightbulb,
  },
  {
    title: 'Skills Examples',
    description: 'Practical examples of Claude skills in action',
    href: '/docs/skills-examples',
    icon: Target,
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    href: '/docs/faq',
    icon: HelpCircle,
  },
  {
    title: 'New User Guide',
    description: 'Complete step-by-step walkthrough for beginners',
    href: '/docs/new-user-guide',
    icon: HelpCircle,
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Documentation
          </h1>
          <p className="text-lg text-neutral-600">
            Complete guides for planning, executing, and delivering technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc, index) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors">
                  <doc.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-lg font-semibold text-neutral-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {doc.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </li>
            <li>
              <Link
                href="/planning/0-Master-Index"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <FileText className="mr-2 h-5 w-5" />
                Planning Sections Index
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
