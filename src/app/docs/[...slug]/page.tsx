import { notFound } from 'next/navigation'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { useMDXComponents } from '@/mdx-components'
import { ArrowLeft } from 'lucide-react'

interface DocsPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getDocContent(slug: string[]) {
  const filePath = join(process.cwd(), 'docs', 'mdx', `${slug.join('/')}.mdx`)
  
  try {
    const content = await readFile(filePath, 'utf-8')
    return content
  } catch (error) {
    console.error('Error reading file:', filePath, error)
    return null
  }
}

export default async function DocsSlugPage({ params }: DocsPageProps) {
  const { slug } = await params
  const content = await getDocContent(slug)

  if (!content) {
    notFound()
  }

  const components = useMDXComponents({})

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/20">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="mb-8">
          <Link
            href="/docs"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        </div>
        
        <article className="prose prose-lg prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-code:text-primary-700 prose-code:bg-primary-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-blockquote:border-l-primary-600 prose-blockquote:text-neutral-600">
          <MDXRemote source={content} components={components} />
        </article>
      </div>
    </div>
  )
}
