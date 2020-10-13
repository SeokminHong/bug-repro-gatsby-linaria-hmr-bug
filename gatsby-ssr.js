/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import ThemeProvider from "./src/components/theme"

export const wrapRootElement = ({ element, props }) => {
  return <ThemeProvider {...props}>{element}</ThemeProvider>
}
