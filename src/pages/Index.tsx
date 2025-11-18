import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Benefits from "@/components/Benefits"
import OpenDays from "@/components/OpenDays"
import FAQ from "@/components/FAQ"
import InviteFriend from "@/components/InviteFriend"
import { Footer } from "@/components/Footer"

export function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Benefits />
      <InviteFriend />
      <OpenDays />
      <FAQ />
      <Footer />
    </div>
  )
}
