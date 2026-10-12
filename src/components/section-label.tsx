import type { ReactNode } from "react"

// Título da seção: visível só no mobile/tablet, onde a navegação lateral some
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-background/90 px-6 py-4 text-xs font-sans font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
      {children}
    </h2>
  )
}
