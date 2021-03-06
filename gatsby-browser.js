/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import ThemeProvider from "./src/components/theme"

export const wrapRootElement = ({ element, props }) => {
  return <ThemeProvider {...props}>{element}</ThemeProvider>
}
