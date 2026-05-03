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
  github?: string
}

const personalProjects: Project[] = [
  {
    name: "Quiz Game",
    description:
      "'Quiz Game' allows users to play a 10-question quiz across a wide variety of categories, either as a guest or by logging in with their Google account. The game tracks scores for logged-in users, displaying their progress on a leaderboard and within a personal scores section.",
    technologies: ["Vue 3", "HTML", "Tailwind CSS", "CSS", "TypeScript", "Firebase", "Netlify"],
    url: "https://play-quiz-game-now.netlify.app/",
  },
  {
    name: "Su Sinnu",
    description:
      "'Su Sinnu' is an e-commerce website developed for a real business in Italy that specializes in agricultural products and includes a Veterinary Pharmacy. Rather than traditional online transactions, users can add items to their cart and download a pre-order file to complete purchases via phone.",
    technologies: ["Squarespace", "HTML", "CSS", "JavaScript"],
    url: "https://www.susinnu.it",
  },
  {
    name: "Find Users",
    description:
      "'Find Users' allows users to create profiles, browse a user list, retrieve details, and save favorites. It serves as a boilerplate prototype for user directory and profile management functionality.",
    technologies: ["Vue 3", "HTML", "Tailwind CSS", "CSS", "TypeScript", "Google Cloud", "Netlify"],
    url: "https://find-users-application.netlify.app/",
  },
  {
    name: "Lisbon Chairs Shop",
    description:
      "'Lisbon Chairs Shop' is a conceptual e-commerce website showcasing handcrafted chairs that combine beauty, comfort, and sustainability. It demonstrates a modern and user-friendly online shopping experience.",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Netlify"],
    url: "https://lisbon-chairs-shop.netlify.app/",
  },
  {
    name: "User Management System",
    description:
      "A full-stack cloud-native app where the frontend is intentionally simple — the real focus was wiring up a complete AWS stack from scratch. API Gateway routes requests to Lambda functions, RDS (PostgreSQL) persists data, SQS decouples the API from email delivery, and SES sends transactional emails asynchronously. The React frontend is hosted on S3 and served globally via CloudFront.\n\nWhat makes this repo stand out is how portable it is. The entire local-vs-AWS switch is controlled by just two lines of code — one toggle in `src/db.ts` points the API at either local PostgreSQL or AWS RDS, and one in `frontend/src/api.ts` switches the frontend between the local NestJS server and the live Lambda endpoint. You still need to connect your own database and configure your AWS services — but the repo makes that easy. A single `.env.example` lists every variable you need, and the README covers both paths clearly: Option A runs everything locally with no AWS account required, Option B deploys the full stack to AWS via Serverless Framework. Full setup instructions in the repo.\n\nThe repo also ships with 7 error branches, each containing a single realistic production bug spread across different layers — Frontend, Lambda config, API Gateway, Database, IAM, and SQS. Each branch includes a `README-debug.md` with hints but no spoilers, making it a practical sandbox for debugging across a distributed system.",
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Docker", "AWS"],
    url: "https://d1pkd3ungpsqha.cloudfront.net/users",
    github: "https://github.com/ale1a1/aws-fullstack-playground",
  },
]

const courseProjects: Project[] = [
  {
    name: "Omnifood",
    description:
      "'Omnifood' was developed as part of an HTML, JavaScript, and CSS course. It is a prototype for a meal subscription service designed to deliver personalized, healthy meals to customers' doors every day.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    url: "https://omnifood-alw.netlify.app/",
  },
  {
    name: "Business Directory",
    description:
      "'Business Directory' was developed as part of a Bootstrap course. It showcases a responsive website for a fictional financial planning company, including service sections and a contact page.",
    technologies: ["React", "HTML", "Bootstrap", "CSS", "JavaScript", "Netlify"],
    url: "https://business-directory-alw.netlify.app/",
  },
  { 
    name: "Bankist",
    description:
      "'Bankist' was developed as part of a JavaScript and CSS course, showcasing a minimalist digital banking experience with interactive UI elements.",
    technologies: [ "HTML", "CSS", "JavaScript", "Netlify"],
    url: "https://bankist-alw.netlify.app/",
  },
  {
    name: "uHost",
    description:
      "'uHost' is a simple hosting company website created as part of an HTML and CSS course. It features Free, Plus, and Premium plans with varying features and responsive layout.",
    technologies: ["JavaScript", "HTML", "CSS", "Netlify"],
    url: "https://uhost-alw.netlify.app/",
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
        <SheetContent side="left" className="w-full sm:max-w-sm bg-card border-t border-l border-b border-border border-r border-r-white/40 p-0 flex flex-col">
          <SheetHeader className="sticky top-0 z-10 bg-card p-4 pb-0">
            <SheetTitle className="text-2xl font-mono text-primary">
              Portfolio
            </SheetTitle>            
            <Separator className="bg-border mt-4" />
          </SheetHeader>
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-6 p-4">
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">
                  Personal Projects
                </h3>
                <div className="flex flex-col gap-2">
                  {personalProjects.map((project) => (
                    <button
                      key={project.name}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-secondary group cursor-pointer"
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
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/90">
                  Course Projects
                </h3>
                <div className="flex flex-col gap-2">
                  {courseProjects.map((project) => (
                    <button
                      key={project.name}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 hover:bg-secondary group cursor-pointer"
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
          </div>
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
