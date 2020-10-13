import React, { useState, createContext } from "react"

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} })

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          setTheme(theme === "light" ? "dark" : "light")
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export { ThemeContext }
