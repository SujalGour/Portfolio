"use client"

import React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Terminal,
  TrendingUp,
  Zap,
  Brain,
  Target,
  DollarSign,
  Calculator,
  Shield,
  Utensils,
  FileText,
  Leaf,
} from "lucide-react"
import { useState, useEffect } from "react"

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"tech" | "finance">("tech")
  const [typingText, setTypingText] = useState("")
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const techProjects = [
    {
      title: "MarketPulse",
      subtitle: "LPL Financial Hackarama Winner",
      year: "2025",
      description:
        "Real-time market sentiment analysis web app that aggregates financial news through web scraping and conducts sentiment analysis to provide actionable trading insights. Won 'Most Innovative Solution' at LPL Financial's Hackarama.",
      tech: ["Python", "Flask", "React", "NLP", "Web Scraping", "Sentiment Analysis"],
      metrics: { award: "Winner", analysis: "Real-time", platform: "Web App" },
      icon: TrendingUp,
      links: {
        github: "https://github.com/SujalGour/MarketPulse",
        demo: "https://www.youtube.com/watch?v=1uvV9bbxebk",
      },
      command: "$ python main.py --analyze --real-time --sentiment",
    },
    {
      title: "Grocify",
      subtitle: "Cal Hacks Berkeley Winner",
      year: "2024",
      description:
        "Smart kitchen assistant that tracks expiry dates, dietary restrictions, and freshness status. Features barcode scanning, personalized recipe suggestions, and food waste reduction. Awarded by Major League Hacking for innovative food waste solution.",
      tech: ["Python", "Flask", "React", "MongoDB", "Computer Vision", "AI"],
      metrics: { users: "200+", reduction: "25%", uptime: "98%" },
      icon: Utensils,
      links: {
        github: "https://github.com/SujalGour/Grocify",
        demo: "https://www.youtube.com/watch?v=3mnrfpyawdU",
        website: "https://grocify.co",
      },
      command: "$ python app.py --scan-barcode --track-expiry --recipes",
    },
    {
      title: "PhishNet",
      subtitle: "AI-powered Chrome Extension - Hacklytics 2025",
      year: "2024",
      description:
        "AI-powered Chrome extension that detects phishing threats in emails, tweets, and URLs. Features ensemble ML models, interactive security quizzes, and explainability panels. Published on Chrome Web Store with multi-model validation system.",
      tech: ["Python", "JavaScript", "Machine Learning", "NLP", "Chrome Extension"],
      metrics: { detection: "92%", falsePos: "5%", store: "Published" },
      icon: Shield,
      links: {
        github: "https://github.com/SujalGour/PhishNet",
        demo: "https://youtu.be/cKemeIPhQCk",
        store: "https://chromewebstore.google.com/detail/phish-net/lllecpchjhllolknfecnhmjdjmlameog",
      },
      command: "$ python phishnet.py --detect --interactive-quiz --chrome",
    },
    {
      title: "Dishcovery",
      subtitle: "Recipe Discovery Platform",
      year: "2024",
      description:
        "Intelligent recipe discovery platform that helps users find personalized meal suggestions based on available ingredients, dietary preferences, and cooking skill level. Built for hackathon with focus on reducing food waste.",
      tech: ["JavaScript", "React", "Node.js", "API Integration", "Machine Learning"],
      metrics: { recipes: "1000+", matching: "AI-powered", waste: "Reduced" },
      icon: Utensils,
      links: {
        demo: "https://devpost.com/software/dishcovery-ryu3q4",
      },
      command: "$ node dishcovery.js --discover --ingredients --preferences",
    },
    {
      title: "Algorithmic Trading Research",
      subtitle: "QuantConnect Platform",
      year: "2024",
      description:
        "Engineered momentum & mean reversion strategies with institutional-grade risk management. Implemented volatility targeting, position sizing, and daily performance reporting with comprehensive backtesting framework.",
      tech: ["Python", "QuantConnect", "Statistical Modeling", "Risk Management"],
      metrics: { strategies: "Multiple", backtests: "Extensive", controls: "Risk" },
      icon: Zap,
      links: { platform: "QuantConnect" },
      command: "$ quantconnect backtest --strategy=momentum --risk-controls",
    },
    {
      title: "Fisher Chess Engine",
      subtitle: "Custom Chess Variant AI",
      year: "2023",
      description:
        "AI chess engine specifically designed for Fischer Random Chess (Chess960) with minimax algorithm and alpha-beta pruning. Supports all 960 starting positions with advanced position evaluation.",
      tech: ["C++", "Algorithm Design", "Game Theory", "AI", "Minimax"],
      metrics: { positions: "960", depth: "8+", algorithm: "Minimax" },
      icon: Brain,
      links: { status: "Local Development" },
      command: "$ ./chess_engine --fischer-random --depth=8 --analyze",
    },
  ]

  const financeProjects = [
    {
      title: "CrowdStrike Equity Analysis",
      subtitle: "Comprehensive DCF Valuation",
      year: "2024",
      description:
        "End-to-end investment analysis from deal sourcing through valuation. Screened 10 companies, selected CrowdStrike for deep research, and built 5-year DCF model with detailed financial projections and WACC calculations.",
      valuation: "$108",
      marketPrice: "$432",
      recommendation: "UNDERVALUED",
      sector: "Cybersecurity",
      icon: Target,
      metrics: { companies: "10", model: "5-year", wacc: "9.44%" },
      links: {
        report: "#",
        dcf: "https://docs.google.com/spreadsheets/d/1NH0oOHFH7WVYJCu-cU0ALJboJjVV4TUFeJbGz9F3oS4/edit?usp=sharing",
      },
    },
    {
      title: "Filevine Investment Analysis",
      subtitle: "Legal Tech Private Equity Case Study",
      year: "2024",
      description:
        "Comprehensive investment analysis of Filevine, a leading legal case management software company. Analyzed market opportunity ($61.44B by 2034), competitive positioning, and projected 2.39x-4.77x returns through IPO exit strategy.",
      valuation: "$834M",
      marketSize: "$61.44B",
      recommendation: "STRONG BUY",
      sector: "Legal Tech",
      icon: FileText,
      metrics: { arr: "50% Growth", retention: "140%", market: "Legal Tech" },
      links: { report: "#" },
    },
    {
      title: "HPAIR Sustainability Case Study",
      subtitle: "Green Hydrogen & Decarbonization Policy",
      year: "2024",
      description:
        "Developed scalable decarbonization solution for developing countries using green hydrogen technology. Proposed innovative 'Green Tax' policy framework for blended finance approach to fund sustainable energy transitions.",
      valuation: "Policy Framework",
      marketSize: "$500B+",
      recommendation: "SUSTAINABLE SOLUTION",
      sector: "Clean Energy",
      icon: Leaf,
      metrics: { scope: "Global", reduction: "2% CO2", framework: "Green Tax" },
      links: { report: "#" },
    },
  ]

  useEffect(() => {
    if (activeCategory === "tech" && techProjects[currentProjectIndex]) {
      const command = techProjects[currentProjectIndex].command
      let i = 0
      setTypingText("")
      const timer = setInterval(() => {
        if (i < command.length) {
          setTypingText(command.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, 150)
      return () => clearInterval(timer)
    }
  }, [currentProjectIndex, activeCategory])

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-60 h-60 bg-blue-500/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-sky-500/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 text-gradient">Project Portfolio</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6 font-medium">
            Innovative solutions spanning quantitative finance, algorithmic trading, and cutting-edge technology
          </p>

          <div className="flex justify-center mb-6">
            <div className="bg-slate-900/40 rounded-full p-2 border border-blue-500/20">
              <button
                onClick={() => setActiveCategory("tech")}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  activeCategory === "tech" ? "bg-blue-600 text-white" : "text-blue-300 hover:text-white"
                }`}
              >
                <Terminal className="inline-block w-4 h-4 mr-2" />
                Tech
              </button>
              <button
                onClick={() => setActiveCategory("finance")}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  activeCategory === "finance" ? "bg-blue-600 text-white" : "text-blue-300 hover:text-white"
                }`}
              >
                <DollarSign className="inline-block w-4 h-4 mr-2" />
                Finance & Analysis
              </button>
            </div>
          </div>
        </div>

        {activeCategory === "tech" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 rounded-2xl border border-blue-500/20 overflow-hidden">
              <div className="bg-slate-800/80 px-6 py-3 border-b border-blue-500/20 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-blue-400 font-mono text-sm">sujal@portfolio:~/projects</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-blue-400 mb-4">
                  <span className="text-cyan-400">sujal@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-300">~/projects</span>
                  <span className="text-white">$ </span>
                  <span className="text-cyan-300">{typingText}</span>
                  <span className="animate-pulse">|</span>
                </div>
                <div className="space-y-2 text-gray-300">
                  {techProjects.map((project, index) => {
                    const IconComponent = project.icon
                    return (
                      <div
                        key={index}
                        onClick={() => setCurrentProjectIndex(index)}
                        className={`cursor-pointer p-3 rounded-lg transition-colors duration-200 ${
                          currentProjectIndex === index
                            ? "bg-blue-500/20 border-l-4 border-blue-400"
                            : "hover:bg-slate-800/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-semibold">{project.title}</span>
                          <span className="text-blue-400 text-xs">({project.year})</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {techProjects[currentProjectIndex] && (
                <Card className="bg-slate-900/80 border-2 border-blue-500/20 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/20">
                          {React.createElement(techProjects[currentProjectIndex].icon, {
                            className: "w-6 h-6 text-blue-400",
                          })}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{techProjects[currentProjectIndex].title}</h3>
                          <p className="text-blue-400 font-semibold">{techProjects[currentProjectIndex].subtitle}</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/20">
                        {techProjects[currentProjectIndex].year}
                      </Badge>
                    </div>

                    <p className="text-blue-100 leading-relaxed mb-4">
                      {techProjects[currentProjectIndex].description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-black/20 rounded-xl border border-blue-500/10">
                      {Object.entries(techProjects[currentProjectIndex].metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-blue-300 text-xs uppercase tracking-wide font-semibold">{key}</div>
                          <div className="text-white font-bold">{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {techProjects[currentProjectIndex].tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-blue-500/20 text-blue-300 border-blue-500/20 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      {techProjects[currentProjectIndex].links.github && (
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0"
                          onClick={() => window.open(techProjects[currentProjectIndex].links.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      )}
                      {techProjects[currentProjectIndex].links.demo && (
                        <Button
                          variant="outline"
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent"
                          onClick={() => window.open(techProjects[currentProjectIndex].links.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {techProjects[currentProjectIndex].links.website && (
                        <Button
                          variant="outline"
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent"
                          onClick={() => window.open(techProjects[currentProjectIndex].links.website, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Website
                        </Button>
                      )}
                      {techProjects[currentProjectIndex].links.store && (
                        <Button
                          variant="outline"
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent"
                          onClick={() => window.open(techProjects[currentProjectIndex].links.store, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Chrome Store
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}

        {activeCategory === "finance" && (
          <div className="space-y-6">
            {financeProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={index}
                  className="bg-slate-900/80 border-2 border-blue-500/20 overflow-hidden hover:border-blue-400/30 transition-colors duration-200"
                >
                  <div className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/20">
                            <IconComponent className="w-8 h-8 text-blue-300" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-blue-300 font-semibold mb-1">{project.subtitle}</p>
                            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/20">
                              {project.sector} • {project.year}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-blue-100 leading-relaxed mb-4">{project.description}</p>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                            <div
                              key={metricIndex}
                              className="p-3 bg-black/30 rounded-lg border border-blue-500/20 text-center"
                            >
                              <div className="text-blue-300 text-xs uppercase tracking-wide font-semibold">{key}</div>
                              <div className="text-white font-bold">{value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          {project.links.report && (
                            <Button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white border-0">
                              <Calculator className="w-4 h-4 mr-2" />
                              View Analysis
                            </Button>
                          )}
                          {project.links.dcf && (
                            <Button
                              variant="outline"
                              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent"
                              onClick={() => window.open(project.links.dcf, "_blank")}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              DCF Model
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-black/40 rounded-xl border border-blue-500/20">
                          <h4 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Valuation Summary
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-blue-200">Target Price:</span>
                              <span className="text-white font-bold">{project.valuation}</span>
                            </div>
                            {project.marketPrice && (
                              <div className="flex justify-between">
                                <span className="text-blue-200">Market Price:</span>
                                <span className="text-white font-bold">{project.marketPrice}</span>
                              </div>
                            )}
                            {project.marketSize && (
                              <div className="flex justify-between">
                                <span className="text-blue-200">Market Size:</span>
                                <span className="text-white font-bold">{project.marketSize}</span>
                              </div>
                            )}
                            <div className="pt-2 border-t border-blue-500/20">
                              <Badge
                                className={`w-full justify-center ${
                                  project.recommendation === "UNDERVALUED"
                                    ? "bg-red-500/20 text-red-300 border-red-500/30"
                                    : project.recommendation === "STRONG BUY"
                                      ? "bg-green-500/20 text-green-300 border-green-500/30"
                                      : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                }`}
                              >
                                {project.recommendation}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
