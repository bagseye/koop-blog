import React from "react"
import { AnimatePresence } from "framer-motion"

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}
