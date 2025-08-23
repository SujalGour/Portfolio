import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Data Science",
      skills: ["Python", "Java", "C++", "R", "JavaScript", "SQL", "MATLAB"],
      frameworks: ["Pandas", "NumPy", "Flask", "MongoDB", "Tableau"],
    },
    {
      title: "Machine Learning & AI",
      skills: ["Statistical ML", "NLP", "LLMs", "Deep Learning", "Computer Vision"],
      frameworks: ["TensorFlow", "PyTorch", "spaCy", "Transformers", "scikit-learn"],
    },
    {
      title: "Quantitative Finance",
      skills: ["Algorithmic Trading", "Risk Management", "Portfolio Optimization", "Derivatives"],
      frameworks: ["QuantConnect", "Bloomberg Terminal", "Monte Carlo", "VaR Models"],
    },
    {
      title: "Financial Analysis",
      skills: ["DCF Modeling", "LBO", "Equity Valuation", "Market Research"],
      frameworks: ["Excel", "Financial Modeling", "Due Diligence", "SEC Filings"],
    },
  ]

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Technical Skills</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-5 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-50/50 to-blue-100/30 border-blue-200/30 flex-1 min-w-[280px] max-w-[400px]"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="default"
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2">Tools & Frameworks</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.frameworks.map((framework, frameworkIndex) => (
                      <Badge
                        key={frameworkIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300 transition-all duration-200 text-xs"
                      >
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
