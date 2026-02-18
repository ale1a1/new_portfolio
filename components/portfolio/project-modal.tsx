"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"
import type { Project } from "./portfolio-sheet"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  function getIcon(tech: string) {
    const map: Record<string, string> = {
      "Vue 3": "vuejs/vuejs-original.svg",
      "Nuxt 3": "nuxtjs/nuxtjs-original.svg",
      React: "react/react-original.svg",
      JavaScript: "javascript/javascript-original.svg",
      TypeScript: "typescript/typescript-original.svg",
      HTML: "html5/html5-original.svg",
      CSS: "css3/css3-original.svg",
      "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
      Bootstrap: "bootstrap/bootstrap-original.svg",
      Firebase: "firebase/firebase-plain.svg",
      Netlify: "netlify/netlify-original.svg",
    }

   if (tech === "Squarespace") {
      return "assets/squarespace-logo-horizontal-white.png"
    }

    return map[tech]
      ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${map[tech]}`
      : ""
  }


  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-primary">
            {project.name}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Details about the {project.name} project
          </DialogDescription>
        </DialogHeader>
        <Separator className="bg-border" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Description
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">              
              {project.technologies.map((tech) => {
                const isSquarespace = tech === "Squarespace"

                return (
                  <li
                    key={tech}
                    className={`flex items-center ${isSquarespace ? "" : "gap-2"}`}
                  >
                    <img
                      src={getIcon(tech)}
                      alt={tech}
                      className={
                        isSquarespace
                          ? "h-9 w-auto object-contain"  
                          : "h-3.5 w-auto object-contain"
                      }
                    />

                    {!isSquarespace && tech}
                  </li>
                )
              })}              
            </div>
          </div>
          {project.url && (
            <>
              <Separator className="bg-border" />
              <Button
                asChild
                className="w-full justify-center gap-2.5 cursor-pointer bg-primary text-primary-foreground hover:bg-transparent hover:text-primary hover:border-primary border border-primary animate-gentle-pulse transition-colors duration-100"

                // className="w-full bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  Open Project
                </a>
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
