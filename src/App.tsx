import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Index } from "@/pages/Index"
import { OpenDayForm } from "@/pages/OpenDayForm"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/open-day/iscrizione" element={<OpenDayForm />} />
      </Routes>
    </Router>
  )
}

export default App
