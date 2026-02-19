"use client"

import { useState } from "react"
import { Menu, Code, User, Phone, Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface MobileMenuProps {
  onInfoClick: () => void
  onAboutClick: () => void
  onContactClick: () => void
  onEmailClick: () => void
  onPortfolioClick: () => void
}

export function MobileMenu({
  onInfoClick,
  onAboutClick,
  onContactClick,
  onEmailClick,
  onPortfolioClick,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  function handleClick(callback: () => void) {
    setOpen(false)
    setTimeout(callback, 200)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="text-foreground hover:bg-secondary"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
          !w-screen 
          !max-w-none 
          h-screen 
          bg-card 
          border-none 
          flex 
          flex-col 
          justify-center 
          items-center
        "
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <div className="flex flex-col gap-6 items-center">
          <Button
            variant="outline"
            onClick={() => handleClick(onInfoClick)}
            className="px-6 justify-center gap-3"
          >
            <Code className="size-4 shrink-0" />
            <span>Skills</span>
          </Button>

          <Button
            onClick={() => handleClick(onPortfolioClick)}
            className="px-6 justify-center gap-3"
          >
            <FolderOpen className="size-4 shrink-0" />
            <span>Portfolio</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => handleClick(onAboutClick)}
            className="px-6 justify-center gap-3"
          >
            <User className="size-4 shrink-0" />
            <span>About</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => handleClick(onContactClick)}
            className="px-6 justify-center gap-3"
          >
            <Phone className="size-4 shrink-0" />
            <span>Contact</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => handleClick(onEmailClick)}
            className="px-6 justify-center gap-3"
          >
            <Mail className="size-4 shrink-0" />
            <span>Email Me</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
