import React, { createContext, useContext, useEffect, useState } from "react";

// Create a new context for managing the theme
const ThemeContext = createContext();

// Define the ThemeProvider component, which will wrap the entire application
export function ThemeProvider({ children }) {
  // Define the initial theme
  let initialTheme = localStorage.getItem("theme") || "light";

  // Define the state for the theme
  const [theme, setTheme] = useState(initialTheme);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Use an effect to set the theme based on localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // Check for valid theme value stored in localStorage
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    }
  }, []);

  // Return the ThemeProvider, providing theme context to the children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook to easily manage the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
