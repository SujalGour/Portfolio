"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-royal-blue/20 shadow-lg shadow-royal-blue/5"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between bg-transparent">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-royal-blue to-deep-royal-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">SG</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-royal-blue to-deep-royal-blue bg-clip-text text-transparent">
              Sujal Gour
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative bg-blue-200",
                  activeSection === section.id
                    ? "text-white bg-gradient-to-r from-royal-blue to-deep-royal-blue shadow-lg shadow-royal-blue/25"
                    : "text-muted-foreground hover:text-royal-blue hover:bg-royal-blue/10",
                )}
              >
                {section.label}
                {activeSection === section.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
