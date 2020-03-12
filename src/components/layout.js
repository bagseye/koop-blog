import React from "react"
import { createGlobalStyle } from "styled-components"
import "typeface-ibm-plex-mono"

const GlobalStyle = createGlobalStyle`
body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")}
}

.code {
    background: orange;
    display: inline-block;
    padding: 1rem;
    font-size: 1.2rem;
    color: #fff;
    margin: 2rem 0;
}
`

const layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme="purple" />
      <main>{children}</main>
    </>
  )
}

export default layout
