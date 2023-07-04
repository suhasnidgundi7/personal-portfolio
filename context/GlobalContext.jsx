"use client"
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({
  userDevice: "",
  fromPage: "",
  toPage: "",
  setFromPage: () => "",
  setToPage: () => "",
  userTheme: "light",
});

export const GlobalContextProvider = ({ children }) => {
  const [fromPage, setFromPage] = useState("");
  const [toPage, setToPage] = useState("");
  const [userTheme, setUserTheme] = useState("");
  const [userDevice, setUserDevice] = useState("");

  useEffect(() => {
    setFromPage(window.location.pathname);

    // Get user's system theme
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setUserTheme(prefersDarkMode ? "dark" : "light");

    // Get user's device type
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setUserDevice("Android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setUserDevice("iOS");
    } else {
      setUserDevice("Desktop");
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ userDevice, fromPage, setFromPage, toPage, setToPage, userTheme }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
