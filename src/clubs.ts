import montecchiaLogo from "@/assets/Logo_Golf_Montecchia.png"
import montecchiaLogoWhite from "@/assets/Logo_Golf_Montecchia_white.png"
import frassanelleLogo from "@/assets/logo_frassanelle_white.png"
import galzignanoLogo from "@/assets/logo_galzignano_white.png"
import albarellaLogo from "@/assets/logo_albarella.png"
import montecchiaHero from "@/assets/hero-golf.jpeg"
import frassanelleHero from "@/assets/hero-frassanelle.jpeg"
import galzignanoHero from "@/assets/hero-galzignano.jpeg"
import albarellaHero from "@/assets/hero-albarella.jpeg"

export type ClubSlug = "montecchia" | "frassanelle" | "galzignano" | "albarella"

export interface Club {
  slug: ClubSlug
  /** Nome completo del circolo, es. "Golf Club Frassanelle" */
  name: string
  /** Nome breve usato nel nome del programma, es. "Frassanelle" */
  short: string
  logo: string
  /** Logo chiaro per fondi scuri (scelta del circolo) */
  logoLight?: string
  hero: string
  address: string
  phone: string
  email: string
  website: string
  instagram: { handle: string; url: string }
  facebook: { label: string; url: string }
  /** Solo Montecchia organizza gli Open Day con modulo di iscrizione */
  openDays: boolean
  /** Regolamento scaricabile, se disponibile */
  regolamento?: string
  /** Chi può essere invitato */
  requirement: string
}

export const CLUBS: Record<ClubSlug, Club> = {
  montecchia: {
    slug: "montecchia",
    name: "Golf della Montecchia",
    short: "Montecchia",
    logo: montecchiaLogo,
    logoLight: montecchiaLogoWhite,
    hero: montecchiaHero,
    address: "Via Montecchia 12, Selvazzano Dentro (PD)",
    phone: "+39 0498055550",
    email: "info@golfmontecchia.it",
    website: "www.golfmontecchia.it",
    instagram: { handle: "golfdellamontecchia", url: "https://www.instagram.com/golfdellamontecchia" },
    facebook: { label: "Golf della Montecchia", url: "https://www.facebook.com/GolfdellaMontecchia" },
    openDays: true,
    regolamento: "/Montecchia_Friends_Regolamento.docx",
    requirement:
      "La promozione è valida solo se l'amico invitato non è un giocatore oppure non è stato associato ad altri circoli da almeno 2 anni.",
  },
  frassanelle: {
    slug: "frassanelle",
    name: "Golf Club Frassanelle",
    short: "Frassanelle",
    logo: frassanelleLogo,
    hero: frassanelleHero,
    address: "Via Rialto 5/A, Rovolon (PD)",
    phone: "+39 049 9910722",
    email: "info@golffrassanelle.it",
    website: "www.golffrassanelle.it",
    instagram: { handle: "golf_frassanelle", url: "https://www.instagram.com/golf_frassanelle" },
    facebook: { label: "Golf Club Frassanelle", url: "https://www.facebook.com/golffrassanelle" },
    openDays: false,
    requirement: "La promozione è valida per tutti i nuovi soci del circolo.",
  },
  galzignano: {
    slug: "galzignano",
    name: "Golf Terme di Galzignano",
    short: "Galzignano",
    logo: galzignanoLogo,
    hero: galzignanoHero,
    address: "Viale delle Terme 82, Galzignano Terme (PD)",
    phone: "+39 049 6456168",
    email: "info@golfgalzignano.it",
    website: "www.golfgalzignano.it",
    instagram: { handle: "golftermedigalzignano", url: "https://www.instagram.com/golftermedigalzignano" },
    facebook: { label: "Golf Terme di Galzignano", url: "https://www.facebook.com/golftermedigalzignano" },
    openDays: false,
    requirement: "La promozione è valida per tutti i nuovi soci del circolo.",
  },
  albarella: {
    slug: "albarella",
    name: "Albarella Golf Links",
    short: "Albarella",
    logo: albarellaLogo,
    hero: albarellaHero,
    address: "Via Po di Levante 4, Rosolina (RO)",
    phone: "+39 0426 330124",
    email: "info@golfalbarella.it",
    website: "www.golfalbarella.it",
    instagram: { handle: "albarellagolf", url: "https://www.instagram.com/albarellagolf" },
    facebook: { label: "Albarella Golf Club", url: "https://www.facebook.com/AlbarellaGolfClub" },
    openDays: false,
    requirement: "La promozione è valida per tutti i nuovi soci del circolo.",
  },
}

export const CLUB_ORDER: ClubSlug[] = ["montecchia", "frassanelle", "galzignano", "albarella"]

export const programName = (club: Club) => `${club.short} & Friends`
