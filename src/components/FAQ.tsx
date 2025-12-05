import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Come funziona esattamente il programma Montecchia & Friends?",
    answer: "Ogni volta che inviti un amico che diventa socio del club, ricevi uno sconto del 10% sulla quota associativa. Lo sconto è cumulabile: se inviti 10 amici, raggiungi il 100% di sconto!"
  },
  {
    question: "Chi può essere invitato?",
    answer: "La promozione è valida solo per amici che non sono giocatori oppure che non sono stati associati ad altri circoli da almeno 3 anni."
  },
  {
    question: "Come posso far partecipare un amico?",
    answer: "Ci sono due modi: il tuo amico può iscriversi a un Open Day indicando il tuo nome nel modulo, oppure puoi portarlo direttamente in segreteria e segnalare che è un tuo invitato. In quest'ultimo caso, riceverà anche una sessione gratuita di campo pratica!"
  },
  {
    question: "Quanto tempo ho per utilizzare lo sconto?",
    answer: "Gli sconti accumulati sono validi per 12 mesi dalla data di maturazione. Potrai utilizzarli al rinnovo della tua quota associativa."
  },
  {
    question: "Posso invitare più di un amico?",
    answer: "Assolutamente sì! Non c'è limite al numero di amici che puoi invitare. Ogni nuovo socio che arriva grazie a te ti farà accumulare un ulteriore 10% di sconto."
  }
]

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-foreground mb-4">
              Domande frequenti
            </h2>
            <p className="text-muted-foreground text-lg">
              Tutto quello che devi sapere sul programma Montecchia & Friends
            </p>
          </div>

          <div className="animate-fade-in-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-[var(--shadow-card)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
