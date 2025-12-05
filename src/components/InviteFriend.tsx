import { Button } from "@/components/ui/button"
import { UserPlus, Building2, Gift, Share2, Copy, Check, FileText, Mail } from "lucide-react"
import { useState } from "react"
// import golfCourseImage from "@/assets/golf-course.jpg" // Decommentare quando disponibile

const InviteFriend = () => {
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

  const shareViaEmail = () => {
    const subject = encodeURIComponent("Invito all'Open Day del Golf della Montecchia")
    const body = encodeURIComponent(`Ciao!\n\nTi invito a partecipare all'Open Day del Golf della Montecchia!\n\nIscriviti qui: ${shareUrl}\n\nSpero di vederti lì! 🏌️‍♂️`)
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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <Gift className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">Bonus!</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  L'amico riceve una sessione gratuita di campo pratica!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-elegant)] border border-border/50 mb-8">
            <h4 className="font-semibold text-foreground text-lg mb-4 text-center">
              Requisiti di partecipazione
            </h4>
            <p className="text-muted-foreground text-center leading-relaxed mb-6">
              La promozione è valida solo se l'amico invitato <strong className="text-foreground">non è un giocatore</strong> oppure <strong className="text-foreground">non è stato associato ad altri circoli da almeno 2 anni</strong>. La segnalazione dell'invito deve avvenire la prima volta che l'amico visita il circolo.
            </p>
            <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Gift className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Vantaggio per l'invitato</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Il socio invitato gode già di una <strong className="text-foreground">quota speciale come nuovo iscritto</strong> al circolo.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border/50 text-center">
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-foreground mb-4">
              Regolamento completo
            </h3>
            <p className="text-muted-foreground mb-6">
              Scarica il regolamento ufficiale del programma Montecchia & Friends per tutti i dettagli
            </p>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 rounded-lg transition-all duration-300"
              asChild
            >
              <a href="/Montecchia_Friends_Regolamento.docx" download>
                <FileText className="w-4 h-4 mr-2" />
                Scarica il regolamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InviteFriend
