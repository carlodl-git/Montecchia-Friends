import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Benefits from "@/components/Benefits"
import InvitedBenefit from "@/components/InvitedBenefit"
import InviteFriend from "@/components/InviteFriend"
import OpenDays from "@/components/OpenDays"
import FAQ from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Benefits />
      <InvitedBenefit />
      <InviteFriend />
      <OpenDays />
      <FAQ />
      <Footer />
    </div>
  )
}
