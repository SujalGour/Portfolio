import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Photo Section */}
          <div className="flex-shrink-0 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-royal-blue/30 shadow-2xl bg-gradient-to-br from-royal-blue/20 to-deep-blue/40">
                <img
                  src="/quantitative-finance-student-headshot.png"
                  alt="Sujal Gour - Quantitative Finance Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-royal-blue to-bright-blue rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-deep-blue to-royal-blue rounded-full opacity-15 blur-2xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I'm a dual-degree student at UC San Diego pursuing Mathematics-Computer Science and Economics, with a
                passion for quantitative finance and algorithmic trading.
              </p>
              <p>
                My expertise spans from developing live trading algorithms on QuantConnect to conducting investment
                research for private equity firms. I've won multiple hackathons including LPL Financial's Hackarama 2025
                and have been recognized as a Jane Street Estimathon Winner.
              </p>
              <p>
                I combine rigorous mathematical modeling with cutting-edge machine learning techniques to solve complex
                financial problems and generate alpha in quantitative trading strategies.
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-royal-blue/20">
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">UC San Diego • GPA: 3.4/4.0</p>
                  <p className="text-sm text-muted-foreground">Mathematics-CS & Economics</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">San Diego, CA</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">Achievements</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Hackarama Winner</Badge>
                    <Badge variant="secondary">Jane Street Winner</Badge>
                    <Badge variant="secondary">UC Investment Fellow</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
