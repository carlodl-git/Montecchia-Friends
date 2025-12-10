import { Gift } from "lucide-react"

const InvitedBenefit = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-elegant)] border border-border/50 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Vantaggio per l'invitato
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Il nuovo socio beneficia di una <strong className="text-foreground">quota agevolata come nuovo iscritto</strong> e riceve l'accesso a <strong className="text-foreground">iniziative esclusive dedicate ai principianti</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvitedBenefit

