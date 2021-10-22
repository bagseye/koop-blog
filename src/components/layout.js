import React, { useState } from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Footer from "./Footer/Footer"
import { motion } from "framer-motion"
import CookieConsent from "react-cookie-consent"
import Header from "./Header/Header"
import Burger from "./Burger/Burger"
import SideMenu from "./SideMenu/SideMenu"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Seo />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Header />
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
        <main style={{ minHeight: "100vh" }}>{children}</main>
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
