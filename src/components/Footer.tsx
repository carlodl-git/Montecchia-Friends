import { MapPin, Phone, Mail, Globe, Instagram, Facebook } from "lucide-react"
import { useClub } from "@/ClubContext"

export function Footer() {
  const club = useClub()
  return (
    <footer className="bg-golf-green text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informazioni di contatto */}
          <div>
            <h3 className="text-xl font-bold mb-4">{club.name}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{club.address}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-4 h-4" />
                <a href={`tel:${club.phone.replace(/\s/g, "")}`}>{club.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${club.email}`}>{club.email}</a>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Globe className="w-4 h-4" />
                <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer">{club.website}</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="space-y-3">
              <a 
                href={club.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>{club.instagram.handle}</span>
              </a>
              <a 
                href={club.facebook.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>{club.facebook.label}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/20 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {club.name}. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Termini e Condizioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
