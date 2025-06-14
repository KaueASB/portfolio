import { Routes, Route } from "react-router"
import { HomePage } from "./pages/home"
import { ProjectsPageRoute } from "./pages/projects"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPageRoute />} />
    </Routes>
  )
}