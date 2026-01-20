import Link from 'next/link'
import { 
  FileText, 
  Code, 
  Sparkles, 
  BookOpen, 
  Settings, 
  FolderOpen,
  Download,
  ArrowRight,
  Rocket,
  HelpCircle,
  ClipboardList
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 p-1 shadow-lg shadow-primary-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                  <ClipboardList className="h-12 w-12 text-primary-600" />
                </div>
              </div>
            </div>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl mb-6">
              Project Planning
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Starter Pack
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl max-w-2xl mx-auto text-balance">
              Complete monorepo structure for planning, executing, and delivering technical projects. 
              Everything you need to go from idea to production.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/new-user-guide"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 transition-all duration-200 transform hover:scale-105"
              >
                <HelpCircle className="h-4 w-4" />
                New User? Start Here
              </Link>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="h-4 w-4" />
                Get Started
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 transition-all duration-200"
              >
                <BookOpen className="h-4 w-4" />
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              A complete system for planning, executing, and delivering technical projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
                {feature.link && (
                  <Link
                    href={feature.link}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-transform"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Start planning your next project with our complete framework. 
              Everything is organized, documented, and ready to use.
            </p>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200"
              >
                <Rocket className="h-4 w-4" />
                Begin Planning
              </Link>
              <Link
                href="/docs/quick-reference"
                className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-300 hover:text-white transition-colors"
              >
                Quick Start Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-neutral-700">
              <p className="text-sm text-neutral-400 mb-4">Download Project Plan Template</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="/Project-Plan-Template.pdf"
                  download="Project-Plan-Template.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200"
                >
                  <Download className="h-5 w-5" />
                  Download PDF
                </a>
                <a
                  href="/Project-Plan-Template.docx"
                  download="Project-Plan-Template.docx"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200"
                >
                  <Download className="h-5 w-5" />
                  Download DOCX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: '12 Planning Sections',
    description: 'Complete strategic and operational planning templates covering every aspect of project delivery.',
    icon: FileText,
    link: '/docs/planning-framework',
  },
  {
    name: 'Technical Execution Guide',
    description: '200+ pages covering all aspects of implementation, from architecture to deployment.',
    icon: Code,
    link: '/docs/technical-guide',
  },
  {
    name: 'Claude Skills',
    description: 'Auto-activated AI assistance for key decisions like tech stack selection and architecture.',
    icon: Sparkles,
    link: '/docs/claude-skills',
  },
  {
    name: 'Reference Guides',
    description: 'Quick access to architecture diagrams, technical summaries, and complete file indexes.',
    icon: BookOpen,
    link: '/docs/quick-reference',
  },
  {
    name: 'Configuration Files',
    description: 'Ready-to-use CI/CD pipelines, linting rules, testing configs, and build automation.',
    icon: Settings,
    link: '/docs',
  },
  {
    name: 'Ready-to-Build Structure',
    description: 'Organized directories for your application code, components, and utilities.',
    icon: FolderOpen,
    link: '/docs/technical-guide',
  },
]
