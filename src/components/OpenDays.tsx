import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Share2, Copy, Check, Mail } from "lucide-react"
import { useState } from "react"

const openDays = [
  {
    date: "31 Gennaio 2026",
    time: "ore 14",
    location: "Golf della Montecchia"
  },
  {
    date: "Febbraio 2026",
    time: "ore 14",
    location: "Golf della Montecchia"
  },
  {
    date: "Marzo 2026",
    time: "ore 14",
    location: "Golf della Montecchia"
  }
]

const OpenDays = () => {
  const [copied, setCopied] = useState(false)
  const shareUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdkRVqQIVcclpQgst6cu9KwmwXi4FeuJdZxJ-9I5p6-2r0hZA/viewform?usp=header'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent("Iscriviti all'Open Day del Golf della Montecchia! 🏌️‍♂️")
    window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareViaEmail = (eventDate: string, eventTime: string) => {
    const subject = encodeURIComponent(`Open Day Golf della Montecchia - ${eventDate}`)
    const body = encodeURIComponent(`Ciao!\n\nTi invito a partecipare all'Open Day del Golf della Montecchia:\n\n📅 Data: ${eventDate}\n🕐 Orario: ${eventTime}\n\nIscriviti qui: ${shareUrl}\n\nSpero di vederti lì! 🏌️‍♂️`)
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank')
  }


  return (
    <section id="open-days" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground mb-4">
            Prossimi Open Day
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Condividi la tua passione con i tuoi amici! Invitali ai nostri Open Day e fai scoprire loro il golf. I nostri professionisti li introdurranno allo sport, guidandoli nella pratica di put, approcci e gioco lungo. Un'occasione perfetta per condividere insieme la passione per lo sport.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {openDays.map((event, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold text-lg">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm opacity-90">{event.time}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={shareViaWhatsApp}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Condividi su WhatsApp
                  </Button>
                  <Button 
                    onClick={() => shareViaEmail(event.date, event.time)}
                    size="lg"
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Condividi via Email
                  </Button>
                  <Button 
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Link copiato!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copia link
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenDays
