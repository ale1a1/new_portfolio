"use client"

import { useState } from "react"
import { Menu, X, Code, User, Phone, Mail, FolderOpen } from "lucide-react"
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
          className="text-foreground hover:bg-secondary"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[260px] bg-card border-border">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col gap-3 pt-8">
          <Button
            variant="outline"
            onClick={() => handleClick(onInfoClick)}
            className="w-full justify-start gap-3 cursor-pointer border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <Code className="size-4 shrink-0" />
            <span>Skills</span>
          </Button>
          <Button
            onClick={() => handleClick(onPortfolioClick)}
            className="w-full justify-start gap-3 cursor-pointer bg-primary text-primary-foreground hover:bg-transparent hover:text-primary hover:border-primary border border-primary transition-all duration-300"
          >
            <FolderOpen className="size-4 shrink-0" />
            <span>Portfolio</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => handleClick(onAboutClick)}
            className="w-full justify-start gap-3 cursor-pointer border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <User className="size-4 shrink-0" />
            <span>About</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => handleClick(onContactClick)}
            className="w-full justify-start gap-3 cursor-pointer border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <Phone className="size-4 shrink-0" />
            <span>Contact</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => handleClick(onEmailClick)}
            className="w-full justify-start gap-3 cursor-pointer border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <Mail className="size-4 shrink-0" />
            <span>Email Me</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
