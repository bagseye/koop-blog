import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Nav from "../Nav/Nav"
import { HeaderStyles } from "./HeaderStyles"

const Header = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  return (
    <>
      <HeaderStyles className={scroll ? "nav__scrolled" : null}>
        <h1>
          <Link to="/">Koop</Link>
        </h1>
        <Nav />
      </HeaderStyles>
    </>
  )
}

export default Header
