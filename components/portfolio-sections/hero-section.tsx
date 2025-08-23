"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Hello World!"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-sm" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-sky-400/60 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/20"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3353.JPG-NDM0kaWjqHmUGowMi76aKDLdZyhu2r.jpeg"
                  alt="Sujal Gour - Professional headshot at UC San Diego campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-mono text-sky-300 mb-2 drop-shadow-lg">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
              </h2>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-sky-500 bg-clip-text text-transparent">
                Sujal Gour
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-sky-200 mb-6 font-medium drop-shadow-lg">
              Quantitative Finance • Data Science • Machine Learning
            </p>

            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-sky-400/30 backdrop-blur-md shadow-xl">
                <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mr-4"></div>
                <span className="text-sky-300 font-semibold text-lg">University of California, San Diego</span>
              </div>
              <p className="text-sky-200/80 mt-3 text-lg">BS Mathematics-Computer Science • BA Economics</p>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
                <div className="flex items-center gap-2 text-sky-300/90">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-sm font-medium">Started: Sep 2023</span>
                </div>
                <div className="w-1 h-1 bg-sky-400/60 rounded-full"></div>
                <div className="flex items-center gap-2 text-sky-300/90">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium">Expected: Dec 2026</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-sky-100/90 mb-10 leading-relaxed font-light">
              Specializing in algorithmic trading and quantitative analysis. Passionate about leveraging data science
              and machine learning in financial markets with hands-on experience in private equity and quantitative
              trading.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="border-sky-400/50 text-sky-200 hover:bg-sky-400/20 hover:text-white bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/sgour101/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-400/50 text-sky-200 hover:bg-sky-400/20 hover:text-white bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300"
                asChild
              >
                <a href="https://github.com/SujalGour" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-400/50 text-sky-200 hover:bg-sky-400/20 hover:text-white bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300"
                asChild
              >
                <a href="mailto:sgour@ucsd.edu">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
