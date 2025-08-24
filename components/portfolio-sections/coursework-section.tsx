"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, TrendingUp, Brain, Award } from "lucide-react"

export function CourseworkSection() {
  const courseworkCategories = [
    {
      title: "Mathematics & Statistics",
      icon: Calculator,
      courses: [
        "Probability Theory",
        "Computational Stochastics",
        "Linear Algebra",
        "Calculus I, II, III",
        "Statistical Methods",
      ],
      color: "from-blue-500 to-sky-500",
    },
    {
      title: "Computer Science",
      icon: Brain,
      courses: ["Data Structures & Algorithms", "Programming in Python", "Programming in Java", "Machine Learning"],
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "Economics & Finance",
      icon: TrendingUp,
      courses: ["Quantitative Methods in Business", "Microeconomics", "Macroeconomics", "Econometrics", "Game Theory", "International Markets"],
      color: "from-blue-600 to-slate-600",
    },
  ]

  const honorsAndAwards = [
    "Jane Street Estimathon Winner",
    "Best Stock Pitch Award (OXY)",
    "UC Investment Academy Fellow",
    "Summer Bridge Scholar (Top 1% First Gen student)",
    "Provost Honor (UCSD)",
    "HPAIR Scholar",
    "Cal Hacks Winner",
    "Hackarama (LPL financial Winner)",
    "IAAC Broze Mendal",
  ]

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/80 to-indigo-900/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 via-transparent to-sky-700/20" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-indigo-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full blur-2xl"></div>
      </div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-sky-400" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              Academic Coursework
            </h2>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Courses taken at UC San Diego with my interest in Math-CS and Economics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {courseworkCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="bg-white/10 border-sky-400/30 backdrop-blur-md hover:bg-white/15 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-3 pt-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-white drop-shadow-sm">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.courses.map((course, courseIndex) => (
                      <Badge
                        key={courseIndex}
                        variant="outline"
                        className="text-xs py-1 px-3 border-sky-400/40 text-white bg-sky-500/20 hover:bg-sky-400/30 hover:text-white transition-colors duration-200 font-medium"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8">
          <Card className="bg-white/8 border-sky-400/20 backdrop-blur-md">
            <CardHeader className="text-center pb-3 pt-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 mb-2 mx-auto">
                <Award className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg font-medium text-white/95">Honors and Awards</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                {honorsAndAwards.map((award, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs py-1 px-3 border-amber-400/30 text-white/90 bg-amber-500/15 hover:bg-amber-400/25 hover:text-white transition-colors duration-200 font-normal"
                  >
                    {award}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
