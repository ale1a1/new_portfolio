"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface SkillsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const skills = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "Sass", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    items: ["React-Next.js", "Angular", "Svelte-kit", "Vue3-Nuxt", "jQuery", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Unit Testing",
    items: ["Jest", "Vitest"],
  },
  {
    category: "Design Tools",
    items: ["Figma", "Webflow", "MockFlow"],
  },
  {
    category: "CMS",
    items: ["Squarespace"],
  },
  {
    category: "Database",
    items: ["Firebase", "SQL (MySQL, SSMS)"],
  },
  {
    category: "Collaboration",
    items: ["Airtable", "Confluence", "Trello"],
  },
  {
    category: "Cloud",
    items: ["Heroku", "Netlify"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    category: "Methodologies",
    items: ["AgilePM"],
  },
]

export function SkillsDialog({ open, onOpenChange }: SkillsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-hidden bg-card border-border flex flex-col">
        <DialogHeader className="sticky top-0 z-10 bg-card pb-3">
          <DialogTitle className="text-2xl font-mono text-primary">
            Technical Skills
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Technologies and tools I work with
          </DialogDescription>
          <Separator className="bg-border mt-3" />
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2 overflow-y-auto">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
