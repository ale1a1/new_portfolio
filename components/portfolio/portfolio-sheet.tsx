"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Globe } from "lucide-react"
import { ProjectModal } from "./project-modal"

export interface Project {
  name: string
  description: string
  technologies: string[]
  url?: string
}

const personalProjects: Project[] = [
  {
    name: "Quiz Game",
    description:
      "'Quiz Game' allows users to play a 10-question quiz across a wide variety of categories, either as a guest or by logging in with their Google account. The game tracks scores for logged-in users, displaying their progress on a leaderboard and within a personal scores section.",
    technologies: ["Vue 3", "HTML", "TypeScript", "CSS", "Firebase", "Netlify"],
    url: "#",
  },
  {
    name: "Su Sinnu",
    description:
      "A web application showcasing Sardinian culture and traditions. Built with modern web technologies for an immersive user experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "#",
  },
  {
    name: "Find Users",
    description:
      "A user search application that allows you to find and explore user profiles through an intuitive interface with real-time search capabilities.",
    technologies: ["React", "JavaScript", "CSS", "REST API"],
    url: "#",
  },
  {
    name: "Lisbon Chairs Shop",
    description:
      "An e-commerce storefront for a Lisbon-based furniture shop, featuring a modern product catalog and shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
]

const courseProjects: Project[] = [
  {
    name: "Omnifood",
    description:
      "A premium food delivery service landing page built as part of a comprehensive web development course. Features responsive design and modern UI patterns.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
  {
    name: "Business Directory",
    description:
      "A business directory application allowing users to search and browse local businesses with filtering and sorting capabilities.",
    technologies: ["Angular", "TypeScript", "Bootstrap"],
    url: "#",
  },
]

interface PortfolioSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PortfolioSheet({ open, onOpenChange }: PortfolioSheetProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-full sm:max-w-sm bg-card border-border p-0 flex flex-col">
          <SheetHeader className="sticky top-0 z-10 bg-card p-4 pb-0">
            <SheetTitle className="text-2xl font-mono text-primary">
              Portfolio
            </SheetTitle>            
            <Separator className="bg-border mt-4" />
          </SheetHeader>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-6 p-4">
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Personal Projects
                </h3>
                <div className="flex flex-col gap-2">
                  {personalProjects.map((project) => (
                    <button
                      key={project.name}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-secondary group"
                    >
                      <div className="flex items-center justify-center size-8 rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <Globe className="size-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <Separator className="bg-border" />

              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Course Projects
                </h3>
                <div className="flex flex-col gap-2">
                  {courseProjects.map((project) => (
                    <button
                      key={project.name}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-secondary group"
                    >
                      <div className="flex items-center justify-center size-8 rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <Globe className="size-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <ProjectModal
        project={selectedProject}
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null)
        }}
      />
    </>
  )
}
