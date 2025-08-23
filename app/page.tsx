import { HeroSection } from "@/components/portfolio-sections/hero-section"
import { ExperienceSection } from "@/components/portfolio-sections/experience-section"
import { ProjectsSection } from "@/components/portfolio-sections/projects-section"
import { SkillsSection } from "@/components/portfolio-sections/skills-section"
import { InterestsSection } from "@/components/portfolio-sections/interests-section"
import { ContactSection } from "@/components/portfolio-sections/contact-section"
import { CourseworkSection } from "@/components/portfolio-sections/coursework-section"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="relative">
      <Header />

      <div id="hero" className="relative">
        <HeroSection />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        <div id="coursework" className="section-light py-20 my-12 rounded-3xl shadow-2xl border border-white/10">
          <CourseworkSection />
        </div>

        <div id="experience" className="section-dark py-20 my-12 rounded-3xl shadow-2xl border border-white/10">
          <ExperienceSection />
        </div>

        <div id="projects" className="section-dark py-20 my-12 rounded-3xl shadow-2xl border border-white/10">
          <ProjectsSection />
        </div>

        <div id="skills" className="section-light py-20 my-12 rounded-3xl shadow-2xl border border-white/10">
          <SkillsSection />
        </div>

        <div id="interests" className="section-dark py-20 my-12 rounded-3xl shadow-2xl border border-white/10">
          <InterestsSection />
        </div>

        <div id="contact" className="section-light py-20 my-12 rounded-3xl mb-20 shadow-2xl border border-white/10">
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
