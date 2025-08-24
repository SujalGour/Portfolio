import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function InterestsSection() {
  const interests = [
    {
      category: "Sports",
      items: ["Squash", "Taekwondo", "Tennis", "Swimming"],
      description: "Always big fan of sports, played in multiple International Taekwondo tournaments, State level Swimming and Basketball when friends draggeg for district level",
      icon: "🏃‍♂️",
      gradient: "from-emerald-400 via-blue-500 to-blue-600",
      bgPattern:
        "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
      photos: [
        { src: "/placeholder-01zmz.png", alt: "Black Belt- Taekwondo" },
        { src: "/taekwondo-belt-uniform.png", alt: "Swimming" },
        { src: "/tennis-racket-ball.png", alt: "Tennis" },
        { src: "/tennis-racket-ball.png", alt: "Squash" },
      ],
    },
    {
      category: "Games",
      items: ["Chess", "Poker",],
      description: "I love chess and college made me fall in love with poker. Since I am not too dood with chess opening I made my own engine with random pieces(Fisher Chess)",
      icon: "♟️",
      gradient: "from-purple-400 via-blue-500 to-indigo-600",
      bgPattern:
        "radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)",
      photos: [
        { src: "/chess-pieces-on-board.png", alt: "Chess" },
        { src: "/poker-chips-cards.png", alt: "Poker" },
      ],
    },
    {
      category: "Music",
      items: ["Classical Sitar",],
      description: "Always wanted to learn an instrument and finally picked up Sitar that too in college and honored to learn from the best and I am grateful to perform in UCSD",
      icon: "🎵",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgPattern:
        "radial-gradient(circle at 40% 60%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
      photos: [
        { src: "/classical-indian-sitar.png", alt: "Sitar" },
      ],
    },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/10 to-indigo-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Fun Stuff
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Things I have been doing and will continue to do outside of work and academics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1
                ${interest.category === "Music" ? "md:col-span-2 md:mx-auto md:w-2/3 flex justify-center" : ""}
              `}
              style={{ background: interest.bgPattern }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${interest.gradient}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className={`relative z-10 p-8 ${interest.category === "Music" ? "flex flex-col items-center text-center" : ""}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                      {interest.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {interest.category}
                      </h3>
                      <div
                        className={`h-1 w-16 bg-gradient-to-r ${interest.gradient} rounded-full mt-2 group-hover:w-24 transition-all duration-300`}
                      ></div>
                    </div>
                  </div>
                </div>

                <p className="text-blue-100 mb-6 text-base leading-relaxed">{interest.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-200 mb-3 uppercase tracking-wider">Gallery</h4>
                  <div className="flex gap-3 mb-4 justify-center">
                    {interest.photos.map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 hover:scale-110"
                      >
                        <Image
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.alt}
                          fill
                          className="object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-200 mb-3 uppercase tracking-wider">
                    Activities
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {interest.items.map((item, itemIndex) => (
                      <Badge
                        key={itemIndex}
                        className={`bg-gradient-to-r ${interest.gradient}/80 text-white border-0 hover:scale-105 transition-all duration-200 px-3 py-1 text-sm font-medium shadow-lg hover:shadow-xl`}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r ${interest.gradient}/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
      </section>
  )
}