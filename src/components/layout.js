import React from "react"
import { createGlobalStyle } from "styled-components"
import "typeface-heebo"
import Seo from "../components/Seo"
import Footer from "./Footer"
import { motion } from "framer-motion"

const GlobalStyle = createGlobalStyle`
:root {
  --dark: #1a1a1a;
  --grey: #7c7c7c;
  --highlight: #0075FF;
}

body {
  color: var(--dark);
  font-family: Heebo, Arial, Helvetica, 'Helvetica Neue', sans-serif;
  padding: 2rem 1.5rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  letter-spacing: -2px;
  line-height: 1.1em;

  &:after {
    content: '.';
    display: inline-block;
    color: var(--highlight);
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--grey);
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.25em;
  letter-spacing: -0.5px;
}

.gatsby-resp-image-wrapper {
  max-width: 800px!important;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.btn {
    color: var(--highlight);
    font-weight: 700;
    margin-top: 1.25rem;
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    text-decoration: none;
    text-transform: capitalize;
  }

main,
footer {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <main>{children}</main>
        <Footer />
      </motion.div>
    </>
  )
}

export default Layout
