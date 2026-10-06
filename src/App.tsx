import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import { Index } from "@/pages/Index"
import { OpenDayForm } from "@/pages/OpenDayForm"
import { ChooseClub } from "@/pages/ChooseClub"
import { CLUBS, type ClubSlug } from "@/clubs"

// referral.golfmontecchia.it continua a mostrare direttamente Montecchia;
// invita.play54.it mostra la scelta del circolo.
const isMontecchiaHost = () => window.location.hostname.endsWith("golfmontecchia.it")

function Home() {
  return isMontecchiaHost() ? <Index club={CLUBS.montecchia} /> : <ChooseClub />
}

function ClubPage() {
  const { club } = useParams()
  const found = club && club in CLUBS ? CLUBS[club as ClubSlug] : undefined
  return found ? <Index club={found} /> : <ChooseClub />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/open-day/iscrizione" element={<OpenDayForm />} />
        <Route path="/:club" element={<ClubPage />} />
      </Routes>
    </Router>
  )
}

export default App
