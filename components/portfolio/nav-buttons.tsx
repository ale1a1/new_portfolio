"use client"

import { Code, User, Phone, Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavButtonsProps {
  onInfoClick: () => void
  onAboutClick: () => void
  onContactClick: () => void
  onEmailClick: () => void
  onPortfolioClick: () => void
}

export function NavButtons({
  onInfoClick,
  onAboutClick,
  onContactClick,
  onEmailClick,
  onPortfolioClick,
}: NavButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-3 xl:gap-4 w-[175px] xl:w-[210px]">
      <Button
        variant="outline"
        onClick={onInfoClick}
        className="w-full justify-center gap-2.5 cursor-pointer border border-primary/40 hover:bg-primary hover:text-primary hover:border-primary transition-colors duration-100"
      >
        <Code className="size-4 xl:size-5 shrink-0" />
        <span>Skills</span>
      </Button>
      <Button
        onClick={onPortfolioClick}
        className="w-full justify-center gap-2.5 cursor-pointer bg-primary text-primary-foreground hover:bg-transparent hover:text-primary hover:border-primary border border-primary animate-gentle-pulse transition-colors duration-100"
      >
        <FolderOpen className="size-4 xl:size-5 shrink-0" />
        <span>Portfolio</span>
      </Button>      
      <Button
        variant="outline"
        onClick={onAboutClick}
        className="w-full justify-center gap-2.5 cursor-pointer border-border text-foreground hover:bg-primary hover:text-primary hover:border-primary transition-colors duration-100"
      >
        <User className="size-4 xl:size-5 shrink-0" />
        <span>About</span>
      </Button>
      <Button
        variant="outline"
        onClick={onContactClick}
        className="w-full justify-center gap-2.5 cursor-pointer border-primary/40 hover:bg-primary hover:text-primary hover:border-primary transition-colors duration-100"
      >
        <Phone className="size-4 xl:size-5 shrink-0" />
        <span>Contact</span>
      </Button>
      <Button
        variant="outline"
        onClick={onEmailClick}
        className="w-full justify-center gap-2.5 cursor-pointer border-border text-foreground hover:bg-primary hover:text-primary hover:border-primary transition-colors duration-100"
      >
        <Mail className="size-4 xl:size-5 shrink-0" />
        <span>Email Me</span>
      </Button>
    </div>
  )
}
