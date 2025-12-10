import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import heroImage from "@/assets/hero-golf.jpeg"
import montecchiaLogo from "@/assets/Logo_Golf_Montecchia.png"

const Hero = () => {
  const scrollToHowItWorks = () => {
    document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="mb-8 -mt-20 md:-mt-24 flex justify-center">
          <img 
            src={montecchiaLogo} 
            alt="Golf della Montecchia" 
            className="h-32 md:h-44 w-auto opacity-90 drop-shadow-lg"
          />
        </div>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Montecchia & Friends
        </h1>
        <p className="font-['Playfair_Display'] text-2xl md:text-3xl mb-4 font-light italic">
          Condividi la passione per il golf
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Invita un amico a scoprire il Golf della Montecchia: entrambi riceverete vantaggi esclusivi!
        </p>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-light opacity-90">
          Tu ottieni uno sconto sulla tua quota associativa, mentre il tuo amico beneficia di agevolazioni dedicate ai nuovi giocatori.
        </p>
        <Button 
          onClick={scrollToHowItWorks}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          👉 Scopri come funziona
        </Button>
      </div>

      <button
        onClick={scrollToHowItWorks}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}

export default Hero
