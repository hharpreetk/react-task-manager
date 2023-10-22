import React, { createContext, useContext, useMemo, useState } from "react";

// Create a new context for managing the theme
const ThemeContext = createContext();

// Define the ThemeProvider component, which will wrap the entire application
export function ThemeProvider({ children }) {
  // Define the state for the theme
  const [darkMode, setDarkMode] = useState(true);

  // Function to toggle the theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Create a memorized object containing theme-related properties
  const theme = useMemo(() => {
    return {
      darkMode,
      toggleDarkMode,
      // Add other theme-related properties here, colors, fonts, etc
    };
  }, [darkMode]);

  // Return the ThemeProvider, providing theme context to the children
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

// Create a custom hook to easily manage the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
