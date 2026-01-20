import type { MDXComponents } from 'mdx/types'
import { MermaidDiagram } from '@/components/markdown/MermaidDiagram'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }: any) => (
      <h1 className="font-display text-4xl font-bold mb-6 mt-8 text-neutral-900 tracking-tight" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="font-display text-3xl font-semibold mb-4 mt-8 text-neutral-900 tracking-tight" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="font-display text-2xl font-semibold mb-3 mt-6 text-neutral-900" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: any) => (
      <p className="mb-6 leading-7 text-neutral-700 text-balance" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: any) => (
      <ul className="list-disc list-outside mb-6 space-y-2 ml-6 text-neutral-700" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="list-decimal list-outside mb-6 space-y-2 ml-6 text-neutral-700" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="leading-7" {...props}>{children}</li>
    ),
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
    pre: ({ children, ...props }: any) => (
      <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto mb-6 border border-neutral-800 font-mono text-sm" {...props}>
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-primary-600 pl-6 italic my-6 text-neutral-600 bg-primary-50/50 py-4 rounded-r-lg" {...props}>
        {children}
      </blockquote>
    ),
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto mb-6 rounded-lg border border-neutral-200">
        <table className="min-w-full divide-y divide-neutral-200" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: any) => (
      <th className="px-6 py-3 bg-neutral-50 text-left text-xs font-display font-semibold text-neutral-900 uppercase tracking-wider border-b border-neutral-200" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700 border-b border-neutral-100" {...props}>
        {children}
      </td>
    ),
    a: ({ href, children, ...props }: any) => (
      <a
        href={href}
        className="text-primary-600 font-medium hover:text-primary-700 underline decoration-2 underline-offset-2 transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    hr: (props: any) => (
      <hr className="my-8 border-0 border-t border-neutral-200" {...props} />
    ),
    strong: ({ children, ...props }: any) => (
      <strong className="font-semibold text-neutral-900" {...props}>{children}</strong>
    ),
    em: ({ children, ...props }: any) => (
      <em className="italic text-neutral-700" {...props}>{children}</em>
    ),
    ...components,
  }
}
