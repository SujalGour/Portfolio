"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative focus:outline-none focus:ring-2 focus:ring-blue-400/70 bg-white/80 dark:bg-slate-900/80 hover:bg-blue-400/10 transition"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}