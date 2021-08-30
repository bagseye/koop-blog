import React from "react"
import { bool, func } from "prop-types"
import { BurgerStyles } from "./BurgerStyles"

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerStyles open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerStyles>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
