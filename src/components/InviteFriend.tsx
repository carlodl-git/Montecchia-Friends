import { Button } from "@/components/ui/button"
import { UserPlus, Building2, Gift, Share2, Copy, Check, FileText, Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useClub } from "@/ClubContext"
import { programName } from "@/clubs"
// import golfCourseImage from "@/assets/golf-course.jpg" // Decommentare quando disponibile

const InviteFriend = () => {
  const club = useClub()
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const shareUrl = club.openDays ? 'https://forms.gle/AKqMsPeTdacbvdY67' : `https://invita.play54.it/${club.slug}`

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
    const text = encodeURIComponent(club.openDays
      ? "Iscriviti all'Open Day del Golf della Montecchia! 🏌️‍♂️"
      : `Ti invito a scoprire il golf al ${club.name}: per i nuovi soci ci sono agevolazioni dedicate! 🏌️‍♂️`)
    window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(club.openDays ? "Invito all'Open Day del Golf della Montecchia" : `Invito al ${club.name}`)
    const body = encodeURIComponent(club.openDays
      ? `Ciao!\n\nTi invito a partecipare all'Open Day del Golf della Montecchia!\n\nIscriviti qui: ${shareUrl}\n\nSpero di vederti lì! 🏌️‍♂️`
      : `Ciao!\n\nTi invito a scoprire il golf al ${club.name}: per i nuovi soci ci sono agevolazioni dedicate.\n\nTutte le informazioni qui: ${shareUrl}\n\nSpero di vederti al circolo! 🏌️‍♂️`)
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background image - placeholder per ora */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      {/* Quando disponibile, decommentare queste righe e rimuovere il div sopra */}
      {/* 
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${golfCourseImage})` }}
      />
      */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground mb-4">
              Come invitare un amico
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Condividi la passione per il golf con amici e conoscenti
            </p>
          </div>

          <div className={`grid gap-8 mb-12 ${club.openDays ? "md:grid-cols-2" : "max-w-xl mx-auto"}`}>
            {club.openDays && (
            <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in-up border border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <UserPlus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4 text-foreground text-center">
                Tramite Open Day
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Il tuo amico si iscrive a un Open Day e indica il tuo nome nel modulo di iscrizione come socio invitante.
              </p>
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
                  onClick={shareViaEmail}
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

            )}

            <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in-up border border-border/50" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4 text-foreground text-center">
                Direttamente in Segreteria
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Porta il tuo amico direttamente al circolo e <strong className="text-foreground">segnala in segreteria che è un tuo invitato.</strong>
              </p>
              {!club.openDays && (
                <div className="space-y-3">
                  <div className="text-center text-foreground space-y-1 mb-2">
                    <a className="block font-semibold hover:text-primary" href={`tel:${club.phone.replace(/\s/g, "")}`}>{club.phone}</a>
                    <a className="block font-semibold hover:text-primary" href={`mailto:${club.email}`}>{club.email}</a>
                  </div>
                  <Button onClick={shareViaWhatsApp} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6 rounded-xl">
                    <Share2 className="w-5 h-5 mr-2" />
                    Condividi su WhatsApp
                  </Button>
                  <Button onClick={shareViaEmail} size="lg" className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold text-lg py-6 rounded-xl">
                    <Mail className="w-5 h-5 mr-2" />
                    Condividi via Email
                  </Button>
                  <Button onClick={copyToClipboard} variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    {copied ? (<><Check className="w-4 h-4 mr-2" />Link copiato!</>) : (<><Copy className="w-4 h-4 mr-2" />Copia link</>)}
                  </Button>
                </div>
              )}
              {club.openDays && (
              <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <Gift className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">Bonus!</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  L'amico riceve una sessione gratuita di campo pratica!
                </p>
              </div>
              )}
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-elegant)] border border-border/50 mb-8">
            <h4 className="font-semibold text-foreground text-lg mb-4 text-center">
              Requisiti di partecipazione
            </h4>
            <p className="text-muted-foreground text-center leading-relaxed">
              {club.requirement} La segnalazione dell'invito deve avvenire la prima volta che l'amico visita il circolo.
            </p>
          </div>

          {club.regolamento && (
          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border/50 text-center">
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-foreground mb-4">
              Regolamento completo
            </h3>
            <p className="text-muted-foreground mb-6">
              Scarica il regolamento ufficiale del programma {programName(club)} per tutti i dettagli
            </p>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 rounded-lg transition-all duration-300"
              asChild
            >
              <a href={club.regolamento} download>
                <FileText className="w-4 h-4 mr-2" />
                Scarica il regolamento
              </a>
            </Button>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default InviteFriend
