import React from "react"
import { Link } from "gatsby"
import { NavStyles } from "./NavStyles"
import { NavItems } from "../../constants/navItems"

const Nav = () => {
  return (
    <NavStyles>
      {NavItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        )
      })}
    </NavStyles>
  )
}

export default Nav
