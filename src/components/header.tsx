import { NavBar } from "./navbar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  return (
    <header className="px-4 md:px-8 py-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="size-11 text-primary-foreground font-bold">
            <AvatarImage src="https://github.com/KaueASB.png" />
            <AvatarFallback className="bg-primary">KA</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold">Kaue Alves</h1>
            <p className="text-muted-foreground">Backend Developer</p>
          </div>
        </div>
        
        <NavBar />
      </div>
    </header>
  )
}