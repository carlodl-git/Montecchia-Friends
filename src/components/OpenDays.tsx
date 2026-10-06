import { CLUBS, openDayInvite } from "@/clubs"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Share2, Copy, Check, Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const openDays = [
  {
    date: "Domenica 29 Marzo 2026",
    iso: "2026-03-29",
    time: "",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "Domenica 12 Aprile 2026",
    iso: "2026-04-12",
    time: "",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "Domenica 26 Aprile 2026",
    iso: "2026-04-26",
    time: "",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "Domenica 10 Maggio 2026",
    iso: "2026-05-10",
    time: "",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "Domenica 24 Maggio 2026",
    iso: "2026-05-24",
    time: "",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "Domenica 21 Giugno 2026",
    iso: "2026-06-21",
    time: "",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "Domenica 27 Settembre 2026",
    iso: "2026-09-27",
    time: "ore 11:00",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "22 Febbraio 2025",
    iso: "2025-02-22",
    time: "ore 12:00",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "1 Marzo 2025",
    iso: "2025-03-01",
    time: "ore 12:00",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "8 Marzo 2025",
    iso: "2025-03-08",
    time: "ore 12:00",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "15 Marzo 2025",
    iso: "2025-03-15",
    time: "ore 12:00",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "22 Marzo 2025",
    iso: "2025-03-22",
    time: "ore 12:00",
    location: "Golf della Montecchia",
    pending: false
  },
  {
    date: "29 Marzo 2025",
    iso: "2025-03-29",
    time: "ore 12:00",
    location: "Golf della Montecchia",
    pending: false
  }
]

// Un Open Day è concluso dal giorno successivo alla sua data
const isPast = (iso: string) => {
  const end = new Date(`${iso}T23:59:59`)
  return end.getTime() < Date.now()
}

const OpenDays = () => {
  const events = [...openDays]
    .map((e) => ({ ...e, past: isPast(e.iso) }))
    .sort((a, b) => Number(a.past) - Number(b.past) || (a.past ? b.iso.localeCompare(a.iso) : a.iso.localeCompare(b.iso)))
  const hasUpcoming = events.some((e) => !e.past)
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const shareUrl = CLUBS.montecchia.openDayForm ?? ''

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(openDayInvite(CLUBS.montecchia).whatsapp)
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  const shareViaEmail = (eventDate: string, eventTime: string) => {
    const invite = openDayInvite(CLUBS.montecchia, { date: eventDate, time: eventTime })
    const subject = encodeURIComponent(invite.subject)
    const body = encodeURIComponent(invite.body)
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank')
  }


  return (
    <section id="open-days" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground mb-4">
            {hasUpcoming ? "Prossimi Open Day" : "Open Day"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Condividi la tua passione con i tuoi amici! Invitali ai nostri Open Day e fai scoprire loro il golf. I nostri professionisti li introdurranno allo sport, guidandoli nella pratica di put, approcci e gioco lungo. Un'occasione perfetta per condividere insieme la passione per lo sport.
          </p>
        </div>

        {!hasUpcoming && (
          <p className="text-center text-foreground font-medium mb-8">
            Gli Open Day in calendario sono conclusi: le nuove date saranno pubblicate a breve. Nel frattempo puoi portare il tuo amico direttamente in segreteria.
          </p>
        )}

        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-8 min-w-max max-w-6xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-border/50 flex-shrink-0 w-[calc(100vw-2rem)] sm:w-80 md:w-96"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
              <div className={`p-6 ${event.past ? "bg-muted text-muted-foreground" : "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"}`}>
                {event.past && (
                  <span className="inline-block mb-3 px-3 py-1 rounded-full bg-foreground/10 text-xs font-semibold uppercase tracking-wide">Concluso</span>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold text-lg">{event.date}</span>
                </div>
                {event.pending && (
                  <div className="text-xs opacity-80 mb-2 italic">
                    Data da definire
                  </div>
                )}
                {event.time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm opacity-90">{event.time}</span>
                </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>

                {event.past ? (
                  <p className="text-sm text-muted-foreground">Open Day concluso.</p>
                ) : (
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
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenDays
