import React from "react"
import { Link } from "gatsby"
import Nav from "../Nav/Nav"
import { HeaderStyles } from "./HeaderStyles"

const Header = () => {
  return (
    <>
      <HeaderStyles>
        <h1>
          <Link to="/">Koop</Link>
        </h1>
        <Nav />
      </HeaderStyles>
    </>
  )
}

export default Header
