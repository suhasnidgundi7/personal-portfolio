"use client"

import React, { useEffect, useState } from 'react';

const ThemeUtils = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (event) => {
      const newTheme = event.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };

    // Initially set the theme based on the user's preference
    handleThemeChange(mediaQuery);

    // Listen for changes in the user's preference and update the theme accordingly
    mediaQuery.addListener(handleThemeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleThemeChange);
    };
  }, []);

  return (
    <>
      {/* Conditionally render the dark or light stylesheet based on the theme */}
      {theme === 'dark' ? (
        <link rel="stylesheet" href="assets/css/dark.css" type="text/css" />
      ) : theme === 'light' ? (
        <link rel="stylesheet" href="assets/css/light.css" type="text/css" />
      ) : <link rel="stylesheet" href="assets/css/light.css" type="text/css" />}
    </>
  );
};

export default ThemeUtils;
