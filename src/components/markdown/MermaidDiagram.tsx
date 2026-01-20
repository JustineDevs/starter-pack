'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mermaidRef.current) return

    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'var(--font-sans)',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
      sequence: {
        useMaxWidth: true,
      },
      gantt: {
        useMaxWidth: true,
      },
    })

    const id = `mermaid-${Math.random().toString(36).substring(7)}`
    mermaidRef.current.id = id

    mermaid
      .render(id, chart)
      .then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg
        }
      })
      .catch((error) => {
        console.error('Mermaid rendering error:', error)
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `<div class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-800 font-semibold">Error rendering diagram</p>
            <pre class="text-xs text-red-600 mt-2 overflow-auto">${error.message}</pre>
          </div>`
        }
      })
  }, [chart])

  return (
    <div className="my-8 flex justify-center">
      <div
        ref={mermaidRef}
        className="mermaid-container bg-white p-6 rounded-lg border border-neutral-200 shadow-sm overflow-x-auto"
      />
    </div>
  )
}

