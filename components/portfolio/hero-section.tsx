"use client"

import { useState, useEffect } from "react"

const roles = ["Front End Developer", "UI Engineer", "React Specialist", "Creative Coder"]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isSwapping, setIsSwapping] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapping(true)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsSwapping(false)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center text-center gap-5 animate-hero-float">
      {/* Available for work badge */}
      <div
        className={`transition-all duration-700 delay-100 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-mono text-primary tracking-wide">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
          </span>
          Available for work
        </span>
      </div>

      <div
        className={`transition-all duration-700 delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-muted-foreground text-xs lg:text-lg font-mono tracking-widest uppercase mb-4">
          Hello, my name is
        </p>
        <h1 className="text-3xl md:text-3xl lg:text-5xl 2xl:text-7xl font-bold tracking-tight text-foreground font-mono">
          Alessandro
          <span className="block text-primary mt-3 mb-3">Ladu</span>
        </h1>
      </div>

      {/* Rotating role */}
      <div
        className={`transition-all duration-700 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-12 lg:w-16 bg-primary" />
          <p
            className={`ms-2 text-lg md:text-xl lg:text-xl 2xl:text-2xl text-muted-foreground font-mono transition-all duration-300 ${
              isSwapping ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {roles[roleIndex]}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div
        className={`transition-all duration-700 delay-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-sm lg:text-base text-muted-foreground/90 max-w-[320px] leading-relaxed">
          Crafting pixel-perfect interfaces &amp; interactive experiences with modern web technologies.
        </p>
      </div>
    </div>
  )
}
