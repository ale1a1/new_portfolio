"use client"

import { Github, Linkedin, Youtube, Instagram, Twitch } from "lucide-react"

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
  },
  {
    name: "Twitch",
    icon: Twitch,
    href: "#",
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="flex items-center justify-center size-10 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
        >
          <social.icon className="size-5" />
        </a>
      ))}
    </div>
  )
}
