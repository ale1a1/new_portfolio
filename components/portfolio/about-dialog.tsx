"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

interface AboutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AboutDialog({ open, onOpenChange }: AboutDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-primary">
            About Me
          </DialogTitle>          
        </DialogHeader>
        <Separator className="bg-border" />
        <div className="flex flex-col gap-4 py-2 text-sm leading-relaxed text-foreground">
          <p>
            I'm Alessandro, a Front End Developer based in Liverpool, UK. 
            <br /> 
            I'm passionate about crafting clean, accessible, and performant user interfaces that delight users.
          </p>
          <p>
            With experience across multiple frameworks including React, Next.js, Angular, Vue, and Svelte, I bring versatility and a deep understanding of modern web development to every project.
          </p>
          <p>
            I believe creativity is nothing but the way to solve new problems. 
            <br /> 
            I enjoy turning complex challenges into elegant, intuitive solutions through thoughtful design and robust engineering.
          </p>
          <p className="text-muted-foreground italic">
            {"When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying the vibrant city of Liverpool."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
