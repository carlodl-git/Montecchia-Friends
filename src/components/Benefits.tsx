import { Percent, TrendingUp, Calendar } from "lucide-react"

const benefits = [
  {
    icon: Percent,
    value: "10%",
    title: "Sconto per te",
    description: "Ricevi lo sconto sulla tua quota annuale per ogni nuovo socio invitato, calcolato su 10% della quota dei nuovi iscritti."
  },
  {
    icon: TrendingUp,
    value: "100%",
    title: "Cumulabile",
    description: "Accumula sconti fino al 100% del valore della tua quota annuale."
  },
  {
    icon: Calendar,
    value: "12 mesi",
    title: "Durata",
    description: "Lo sconto resta valido per 12 mesi dalla data di iscrizione del nuovo socio."
  }
]

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground mb-4">
            I vantaggi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un programma pensato per far crescere la comunità e premiare chi condivide la passione per il golf
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-10 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 animate-fade-in-up text-center border border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-['Playfair_Display'] text-5xl font-bold text-primary mb-3">
                {benefit.value}
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
