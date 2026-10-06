import { useEffect } from "react"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Benefits from "@/components/Benefits"
import InvitedBenefit from "@/components/InvitedBenefit"
import InviteFriend from "@/components/InviteFriend"
import OpenDays from "@/components/OpenDays"
import FAQ from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { ClubProvider } from "@/ClubContext"
import { programName, type Club } from "@/clubs"

export function Index({ club }: { club: Club }) {
  useEffect(() => {
    document.title = `${programName(club)} - ${club.name}`
  }, [club])

  return (
    <ClubProvider value={club}>
      <div className="min-h-screen">
        <Hero />
        <HowItWorks />
        <Benefits />
        <InvitedBenefit />
        <InviteFriend />
        {club.openDays && <OpenDays />}
        <FAQ />
        <Footer />
      </div>
    </ClubProvider>
  )
}
