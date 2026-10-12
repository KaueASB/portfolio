import { useEffect, useRef } from "react"

// Luz suave que acompanha o cursor (desativada em telas de toque e com movimento reduzido)
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || reducedMotion) return

    const handleMove = (event: PointerEvent) => {
      ref.current?.style.setProperty("--mx", `${event.clientX}px`)
      ref.current?.style.setProperty("--my", `${event.clientY}px`)
    }

    window.addEventListener("pointermove", handleMove)
    return () => window.removeEventListener("pointermove", handleMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background:
          "radial-gradient(560px circle at var(--mx, 30%) var(--my, 20%), hsl(var(--primary) / 0.07), transparent 70%)",
      }}
    />
  )
}
