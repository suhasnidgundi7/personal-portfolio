"use client"
import { createContext, useContext, useEffect, useState } from "react";

const RouteAnimationContext = createContext({
  fromPage: "",
  toPage: "",
  setFromPage: () => "",
  setToPage: () => "",
  userTheme: "light", // Initial state for userTheme
});

export const RouteAnimationContextProvider = ({ children }) => {
  const [fromPage, setFromPage] = useState("");
  const [toPage, setToPage] = useState("");
  const [userTheme, setUserTheme] = useState(""); // State for userTheme

  useEffect(() => {
    setFromPage(window.location.pathname);

    // Get user's system theme
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("userTheme");

    if (storedTheme) {
      setUserTheme(storedTheme);
    } else {
      setUserTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userTheme", userTheme);
  }, [userTheme]);

  return (
    <RouteAnimationContext.Provider
      value={{ fromPage, setFromPage, toPage, setToPage, userTheme }}
    >
      {children}
    </RouteAnimationContext.Provider>
  );
};

export const useRouteAnimationContext = () => useContext(RouteAnimationContext);
