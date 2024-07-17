import type { ReactNode } from "react"

interface ListSkillsProps {
  children: ReactNode;
}

export function ListSkills({children}: ListSkillsProps) {
  return (
    <li className="flex items-center gap-3">
      {children}
    </li>
  )
}