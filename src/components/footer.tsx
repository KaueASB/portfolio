import { Button } from "./ui/button";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <footer className="bg-muted py-6 border-t">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <p className="text-muted-foreground text-sm">&copy; 2024 Kaue Alves. All rights reserved.</p>

        <div className="flex text-sm items-center">
          <Button onClick={handleScrollToTop} variant="link">
            Voltar ao topo
          </Button>
        </div>
      </div>
    </footer>
  )
}