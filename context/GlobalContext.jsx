"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({
  userDevice: "",
  fromPage: "",
  toPage: "",
  setFromPage: () => {},
  setToPage: () => {},
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
      setUserDevice("Phone"); // Match Android devices to "Phone"
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setUserDevice("Phone"); // Match iOS devices to "Phone"
    } else if (/TV/.test(userAgent)) {
      setUserDevice("TV"); // Match TV devices
    } else if (/tablet/i.test(userAgent)) {
      setUserDevice("Tablet"); // Match tablet devices
    } else {
      setUserDevice("Desktop"); // Match remaining devices to "Desktop"
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
