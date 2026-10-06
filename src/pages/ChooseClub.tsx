import { useEffect } from "react"
import { Link } from "react-router-dom"
import { CLUBS, CLUB_ORDER } from "@/clubs"
import pg54Logo from "@/assets/pg54_white.png"

export function ChooseClub() {
  useEffect(() => {
    document.title = "Invita un amico - PlayGolf54"
  }, [])

  return (
    <div className="min-h-screen bg-golf-green text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-14 animate-fade-in">
          <img src={pg54Logo} alt="PlayGolf54" className="h-20 md:h-24 w-auto mx-auto mb-8" />
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-4">Invita un amico</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Per ogni nuovo socio che presenti ricevi il 10% della sua quota come sconto sulla tua.
            Scegli il tuo circolo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CLUB_ORDER.map((slug) => {
            const club = CLUBS[slug]
            return (
              <Link
                key={slug}
                to={`/${slug}`}
                className="group relative h-56 rounded-2xl overflow-hidden shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${club.hero})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
                <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <img src={club.logoLight ?? club.logo} alt="" className="h-20 w-auto drop-shadow-lg" />
                  <span className="font-['Playfair_Display'] text-2xl font-semibold">{club.name}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
