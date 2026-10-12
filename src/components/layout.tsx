import { Outlet } from "react-router"

import { Spotlight } from "./spotlight"

export function Layout() {
  return (
    <div className="relative flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Spotlight />
      <Outlet />
    </div>
  )
}
