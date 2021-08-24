import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import "typeface-heebo"
import Seo from "../components/Seo"
import Footer from "./Footer"
import { motion } from "framer-motion"
import CookieConsent from "react-cookie-consent"

const GlobalStyle = createGlobalStyle`
:root {
  --dark: #1a1a1a;
  --grey: #7c7c7c;
  --highlight: #0075FF;
}

* {
  box-sizing: border-box;
}

body {
  color: var(--dark);
  font-family: Heebo, Arial, Helvetica, 'Helvetica Neue', sans-serif;
  padding: 2rem 1.5rem;
  margin: 0;
  padding: 0;
}

h1,
.title__main {
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

main {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 30px 0 30px;
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
        <CookieConsent
          location="bottom"
          buttonText="OK"
          cookieName="koopBlogCookie"
          expires={150}
          style={{
            background: "#222222",
            padding: "15px 25px",
            fontSize: "16px",
          }}
          buttonStyle={{
            backgroundColor: "#fff",
            color: "#222222",
            fontSize: "16px",
            fontWeight: 700,
            padding: "8px 18px",
          }}
        >
          This website uses cookies to help improve your experience. By using
          this site you agree to the website{" "}
          <Link to="/privacy" style={{ color: "#fff" }}>
            privacy statement
          </Link>
          .
        </CookieConsent>
      </motion.div>
    </>
  )
}

export default Layout
