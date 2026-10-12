import { Outlet } from "react-router"

import { Header } from "./header"
import { Footer } from "./footer"

export function Layout() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
