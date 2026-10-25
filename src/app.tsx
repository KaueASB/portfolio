import { Routes, Route } from "react-router"
import { Layout } from "./components/layout"
import { HomePage } from "./pages/home"
import { ProjectsPageRoute } from "./pages/projects"
import { NotFoundPage } from "./pages/not-found"

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPageRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
