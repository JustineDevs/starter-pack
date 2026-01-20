import { notFound } from 'next/navigation'
import { readFile } from 'fs/promises'
import { join } from 'path'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { MermaidDiagram } from '@/components/markdown/MermaidDiagram'
import { ArrowLeft, FileText } from 'lucide-react'

interface PlanningPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPlanningContent(slug: string[]) {
  let fileName = slug.join('/')
  // Remove .md extension if present
  if (fileName.endsWith('.md')) {
    fileName = fileName.slice(0, -3)
  }
  const filePath = join(process.cwd(), 'planning', `${fileName}.md`)
  
  try {
    const content = await readFile(filePath, 'utf-8')
    return content
  } catch (error) {
    console.error('Error reading planning file:', filePath, error)
    return null
  }
}

export default async function PlanningPage({ params }: PlanningPageProps) {
  const { slug } = await params
  const content = await getPlanningContent(slug)

  if (!content) {
    notFound()
  }

  try {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/20">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/docs/planning-framework"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Planning Framework
            </Link>
            <Link
              href="/planning/0-Master-Index"
              className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" />
              Master Index
            </Link>
          </div>
          
          <article className="prose prose-lg prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-code:text-primary-700 prose-code:bg-primary-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-blockquote:border-l-primary-600 prose-blockquote:text-neutral-600">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code: ({ className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || '')
                  const language = match ? match[1] : ''
                  const codeString = String(children).replace(/\n$/, '')

                  if (language === 'mermaid') {
                    return <MermaidDiagram chart={codeString} />
                  }

                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error rendering planning page:', error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/20">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <div className="mb-8">
            <Link
              href="/docs/planning-framework"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Planning Framework
            </Link>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <h2 className="text-lg font-semibold text-red-900 mb-2">Error Loading Content</h2>
            <p className="text-red-700">There was an error rendering this planning section. Please try again later.</p>
            <pre className="mt-4 text-xs text-red-600 overflow-auto">{String(error)}</pre>
          </div>
        </div>
      </div>
    )
  }
}

