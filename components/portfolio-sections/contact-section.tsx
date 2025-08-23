import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Get In Touch</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in discussing quantitative finance, algorithmic trading, and innovative technology
              projects. Whether you're looking to collaborate or just want to chat about markets and data science, feel
              free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>sgour@ucsd.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>(858) 241-7402</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>San Diego, CA</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card className="p-6">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
