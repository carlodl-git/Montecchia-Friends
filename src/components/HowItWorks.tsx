import { Users, UserPlus, Gift } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Invita un amico",
    description: "Porta un amico con te al circolo, oppure invitalo ad un Open Day"
  },
  {
    icon: UserPlus,
    title: "L'amico si iscrive",
    description: "Il tuo amico diventa nuovo socio del Club e riceve una promozione dedicata"
  },
  {
    icon: Gift,
    title: "Ottenete i Vantaggi",
    description: "Ottieni uno sconto in percentuale sulla tua quota. Gli sconti sono cumulabili fino al 100% del totale della tua quota annuale."
  }
]

const HowItWorks = () => {
  return (
    <section id="come-funziona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground mb-4">
            Come funziona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tre semplici passi per condividere la tua passione e ottenere vantaggi per entrambi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
