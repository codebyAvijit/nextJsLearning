"use client";
import { ThemeContext } from "@/hooks/useTheme";
import { useState, useEffect, React } from "react";

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  useEffect(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
    } else if (savedMode === "false") {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", String(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
