import { Routes, Route } from "react-router"
import { Layout } from "./components/layout"
import { HomePage } from "./pages/home"
import { ProjectsPageRoute } from "./pages/projects"

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPageRoute />} />
      </Route>
    </Routes>
  )
}
