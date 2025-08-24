import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, PieChart, BarChart3, Calculator } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Board Member - Quantitative Financial Analyst",
      company: "Triton Quantitative Trading",
      period: "Jan 2024 - Present",
      description:
        "Developed and deployed live quantitative trading algorithms on QuantConnect using Python, NumPy, and Pandas. Applied advanced statistical techniques to generate alpha and improve Sharpe ratio.",
      skills: ["Python", "QuantConnect", "Algorithms", "Risk Management"],
      metrics: { sessions: "1", blogs: "1", events: "15+" },
      icon: TrendingUp,
      color: "from-emerald-600/30 via-blue-700/40 to-slate-800/50",
      bgBlend: "bg-gradient-to-br from-emerald-500/20 to-blue-900/60",
    },
    {
      title: "Private Equity Intern",
      company: "Triton Funds LLC",
      period: "Jun 2024 - Aug 2024",
      description:
        "Performed investment research analysis and due diligence for 20+ companies across healthcare and tech industries. Collaborated with senior analysts to develop investment memos and pitch decks.",
      skills: ["Due Diligence", "Financial Analysis", "SEC Filings", "Investment Research"],
      metrics: { companies: "20+", sectors: "2", memos: "15+" },
      icon: PieChart,
      color: "from-violet-600/30 via-indigo-700/40 to-slate-800/50",
      bgBlend: "bg-gradient-to-br from-violet-500/20 to-indigo-900/60",
    },
    {
      title: "Senior Analyst",
      company: "Hedge Fund Club",
      period: "Mar 2024 - Present",
      description:
        "Recognized with Best Stock Pitch Award for Occidental Petroleum (OXY). Supported portfolio management by executing trades and conducting risk assessments using Monte Carlo simulations.",
      skills: ["Equity Valuation", "Monte Carlo", "Portfolio Management", "Risk Assessment"],
      metrics: { award: "Best Pitch", sessions: "8+", models: "Monte Carlo" },
      icon: BarChart3,
      color: "from-amber-600/30 via-blue-700/40 to-slate-800/50",
      bgBlend: "bg-gradient-to-br from-amber-500/20 to-blue-900/60",
    },
  ]

  return (
    <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20zm0-10V8H18v2.5h-2.5V12H18v2.5h2V12h2.5v-1.5H20zm0 20V28H18v2.5h-2.5V32H18v2.5h2V32h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">Technical Experiences</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 rounded-full"></div>

          <div className="absolute right-0 top-1/4 w-80 h-80 opacity-10 hidden lg:block">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-blue-800/30 rounded-full blur-3xl"></div>
            <Calculator className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-blue-400/20" />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-4 border-background z-10 flex items-center justify-center shadow-lg">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>

                  <div className={`flex ${index % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"}`}>
                    <div className={`w-full max-w-md ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                      <Card
                        className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${exp.color} border-blue-200/50 backdrop-blur-md ${exp.bgBlend} shadow-lg`}
                      >
                        <div className="flex flex-col mb-3">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-white font-mono drop-shadow-sm">{exp.title}</h3>
                            <Badge
                              variant="outline"
                              className="border-blue-300/50 text-white bg-blue-500/20 text-xs ml-2 font-mono"
                            >
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-base font-medium text-white/80 mb-3 drop-shadow-sm">{exp.company}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-black/30 rounded-lg border border-white/20 backdrop-blur-sm">
                          {Object.entries(exp.metrics).map(([key, value], metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-blue-200 text-xs uppercase tracking-wide font-medium font-mono">
                                {key}
                              </div>
                              <div className="text-white font-bold text-sm font-mono drop-shadow-sm">{value}</div>
                            </div>
                          ))}
                        </div>

                        <p className="text-white/85 mb-4 leading-relaxed text-sm drop-shadow-sm">{exp.description}</p>

                        <div className="flex flex-wrap gap-1">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              className="bg-black/40 text-white hover:bg-black/50 text-xs font-mono border border-white/30 backdrop-blur-sm"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
