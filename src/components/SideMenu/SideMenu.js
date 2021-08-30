import React from "react"
import { Link } from "gatsby"
import { bool } from "prop-types"
import { NavItems } from "../../constants/navItems"
import { SideMenuStyles } from "./SideMenuStyles"

const SideMenu = ({ open }) => {
  return (
    <SideMenuStyles open={open}>
      <ul>
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </SideMenuStyles>
  )
}

SideMenu.propTypes = {
  open: bool.isRequired,
}

export default SideMenu
