import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const Regolamento = () => {
  return (
    <section id="regolamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border/50">
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
      </div>
    </section>
  )
}

export default Regolamento

