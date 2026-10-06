import { createContext, useContext } from "react"
import { CLUBS, type Club } from "@/clubs"

const ClubContext = createContext<Club>(CLUBS.montecchia)

export const ClubProvider = ClubContext.Provider

export const useClub = () => useContext(ClubContext)
