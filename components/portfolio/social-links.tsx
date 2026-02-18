"use client"

import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Twitch,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alessandro-ladu-69196a239/",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ale1a1",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com",
  },
  {
    name: "Twitch",
    icon: Twitch,
    href: "https://www.twitch.tv",
  },
]

export function SocialLinks() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center size-10 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
              >
                <social.icon className="size-5" />
              </a>
            </TooltipTrigger>

            <TooltipContent side="top">
              <p className="text-xs">{social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
