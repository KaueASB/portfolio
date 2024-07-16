import { ThemeToggle } from "./theme/theme-toggle";

export function NavBar() {
  return (
    <nav className="hidden md:flex gap-4 items-center">
      <a href="#about" className="hover:underline underline-offset-4">
        About
      </a>

      <a href="#projects" className="hover:underline underline-offset-4">
        Projects
      </a>
      
      <a href="#contact" className="hover:underline underline-offset-4">
        Contact
      </a>

      <ThemeToggle />
    </nav>
  )
}