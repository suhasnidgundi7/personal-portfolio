"use client"
import { createContext, useContext, useEffect, useState } from "react"

const RouteAnimationContext = createContext({
  fromPage: "",
  toPage: "",
  setFromPage: () => "",
  setToPage: () => ""
})

export const RouteAnimationContextProvider = ({ children }) => {
  const [fromPage, setFromPage] = useState("")
  const [toPage, setToPage] = useState("")

  useEffect(() => {
    setFromPage(window.location.pathname);
  }, [])
  

  return (
    <RouteAnimationContext.Provider value={{ fromPage, setFromPage, toPage, setToPage }}>
      {children}
    </RouteAnimationContext.Provider>
  )
}

export const useRouteAnimationContext = () => useContext(RouteAnimationContext)
