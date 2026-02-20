"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col items-center text-center gap-4 animate-hero-float">
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

      <div
        className={`transition-all duration-700 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-12 lg:w-16 bg-primary" />
          <p className="ms-2 text-lg md:text-xl lg:text-xl 2xl:text-2xl text-muted-foreground font-mono">
            Front End Developer
          </p>
        </div>
      </div>


    </div>
  )
}
