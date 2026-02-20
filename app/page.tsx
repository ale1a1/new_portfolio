"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { HeroSection } from "@/components/portfolio/hero-section"
import { NavButtons } from "@/components/portfolio/nav-buttons"
import { SkillsDialog } from "@/components/portfolio/skills-dialog"
import { AboutDialog } from "@/components/portfolio/about-dialog"
import { ContactDialog } from "@/components/portfolio/contact-dialog"
import { EmailSheet } from "@/components/portfolio/email-sheet"
import { PortfolioSheet } from "@/components/portfolio/portfolio-sheet"
import { SocialLinks } from "@/components/portfolio/social-links"
import { MobileMenu } from "@/components/portfolio/mobile-menu"
import { Github, Linkedin, Youtube, Instagram, Twitch } from "lucide-react"

export default function PortfolioPage() {
  const [skillsOpen, setSkillsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [emailOpen, setEmailOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

       <div className="absolute inset-0 pointer-events-none">
       <div className="absolute left-1/2 top-1/5 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/17.5 blur-[180px]" />
       </div>

      {/* ========== PHONE LAYOUT (< md) ========== */}
      <div className="relative z-10 flex md:hidden flex-col h-screen">
        {/* Full-height photo with overlays */}
        <div className="flex-1 min-h-0 relative">
          <Image
            src="/assets/picture.jpg"
            alt="Alessandro Ladu at a seaside location in Nice, France"
            fill
            className="object-cover object-[center_15%]"
            priority
          />
          {/* Dark gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          {/* Top bar: name badge + hamburger */}
          <div
            className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-4 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="inline-block px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold tracking-wider">
              Alessandro Ladu
            </span>
            <MobileMenu
              onInfoClick={() => setSkillsOpen(true)}
              onAboutClick={() => setAboutOpen(true)}
              onContactClick={() => setContactOpen(true)}
              onEmailClick={() => setEmailOpen(true)}
              onPortfolioClick={() => setPortfolioOpen(true)}
            />
          </div>
          {/* Front End Developer text overlaid at bottom-right of photo */}
          <div
            className={`absolute bottom-6 right-4 z-20 text-right transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-2xl font-bold text-foreground font-mono tracking-tight">
              Front End
              <span className="block text-primary">Developer</span>
            </p>
          </div>
        </div>

        {/* Bottom bar: social icons only */}
        <nav
          className={`flex items-center justify-center px-4 py-3 border-t border-border bg-card/80 backdrop-blur-sm transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              <Instagram className="size-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              <Linkedin className="size-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              <Github className="size-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              <Youtube className="size-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              <Twitch className="size-5" />
            </a>
          </div>
        </nav>
      </div>

      {/* ========== TABLET LAYOUT (md to lg) ========== */}
      <div className="relative z-10 hidden md:flex lg:hidden flex-col h-screen">
        {/* Tablet header with social links + hamburger */}
        <header
          className={`flex items-center justify-between px-8 py-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-semibold tracking-wider">
            Alessandro Ladu
          </span>
          <div className="flex items-center gap-4">
            <MobileMenu
              onInfoClick={() => setSkillsOpen(true)}
              onAboutClick={() => setAboutOpen(true)}
              onContactClick={() => setContactOpen(true)}
              onEmailClick={() => setEmailOpen(true)}
              onPortfolioClick={() => setPortfolioOpen(true)}
            />
          </div>
        </header>

        {/* 2-column: Photo | Hero */}
        <div className="flex-1 min-h-0 flex items-center px-8 py-4">
          <div className="w-full grid grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div
              className={`flex items-center justify-center transition-all duration-1000 ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative w-[240px] h-[320px] overflow-hidden rounded-2xl">
                <div className="absolute -inset-px rounded-2xl bg-primary/20 z-10 pointer-events-none" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/assets/picture.jpg"
                    alt="Alessandro Ladu at a seaside location in Nice, France"
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                    sizes="240px"
                  />
                  {/* Front End Developer overlaid bottom-right */}
                  <div className="absolute bottom-3 right-3 z-20 text-right">
                    <p className="text-sm font-bold text-foreground font-mono tracking-tight drop-shadow-lg">
                      Front End
                      <span className="block text-primary">Developer</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero */}
            <div
              className={`flex items-center transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <HeroSection />
            </div>
          </div>
        </div>

        {/* Tablet footer */}
        <footer
          className={`flex items-center justify-between px-8 py-3 border-t border-border transition-all duration-700 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs text-muted-foreground">
            {'"Creativity is nothing but the way to solve new problems..."'}
          </p>
          <SocialLinks />
        </footer>
      </div>

      {/* ========== DESKTOP LAYOUT (lg+) ========== */}
      <div className="relative z-10 hidden lg:flex flex-col h-screen">
        {/* 3-Column Content Grid */}
        <div className="mx-auto flex-1 min-h-0 flex items-center justify-center px-16 xl:px-20 2xl:px-50 py-4">
          <div className="mx-8 w-full grid grid-cols-[1fr_1fr_1fr] gap-10 xl:gap-28 items-center justify-items-center">
            {/* Column 1 - Photo */}
            <div
              className={`w-full transition-all duration-1000 flex items-center justify-center ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-2xl">
                <div className="absolute -inset-px rounded-2xl bg-primary/7 z-10 pointer-events-none" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/assets/picture.jpg"
                    alt="Alessandro Ladu at a seaside location in Nice, France"
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                    sizes="(max-width: 1280px) 350px, 420px"
                  />                  
                </div>
              </div>
            </div>

            {/* Column 2 - Hero */}
            <div
              className={`flex items-center justify-center transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <HeroSection />
            </div>

            {/* Column 3 - Navigation Buttons */}
            <div
              className={`flex justify-self-start transition-all duration-700 delay-600 ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <NavButtons
                onInfoClick={() => setSkillsOpen(true)}
                onAboutClick={() => setAboutOpen(true)}
                onContactClick={() => setContactOpen(true)}
                onEmailClick={() => setEmailOpen(true)}
                onPortfolioClick={() => setPortfolioOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Desktop footer */}
        <footer
          className={`flex items-center justify-between px-12 xl:px-20 py-3 border-t border-border transition-all duration-700 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-md text-muted-foreground">
            {'"Creativity is nothing but the way to solve new problems..."'}
          </p>
          <SocialLinks />
        </footer>
      </div>

      {/* Modals & Sheets */}
      <SkillsDialog open={skillsOpen} onOpenChange={setSkillsOpen} />
      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <EmailSheet open={emailOpen} onOpenChange={setEmailOpen} />
      <PortfolioSheet open={portfolioOpen} onOpenChange={setPortfolioOpen} />
    </main>
  )
}
