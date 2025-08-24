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
                  alt="Sujal Gour - Portfolio Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-royal-blue to-bright-blue rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-deep-blue to-royal-blue rounded-full opacity-15 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
