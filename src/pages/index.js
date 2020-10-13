import React, { useContext } from "react"

import Layout from "../components/layout"
import { ThemeContext } from "../components/theme"
import Image from "../components/image"

const IndexPage = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button
        onClick={e => {
          e.preventDefault()
          toggleTheme()
        }}
      >
        Toggle Theme
      </button>
    </Layout>
  )
}

export default IndexPage
