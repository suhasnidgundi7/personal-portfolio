"use client"
import { createContext, useContext, useState } from "react"

const RouteAnimationContext = createContext({
  fromPage: "",
  toPage: "",
  setFromPage: () => "",
  setToPage: () => ""
})

export const RouteAnimationContextProvider = ({ children }) => {
  const [fromPage, setFromPage] = useState("")
  const [toPage, setToPage] = useState("")

  return (
    <RouteAnimationContext.Provider value={{ fromPage, setFromPage, toPage, setToPage }}>
      {children}
    </RouteAnimationContext.Provider>
  )
}

export const useRouteAnimationContext = () => useContext(RouteAnimationContext)
