import React from "react"
import { AnimatePresence } from "framer-motion"

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from layout.js * 1000 to get time in ms
  // * 2 for exit and enter transition
  const TRANSITION_DELAY = 0.5 * 1000 * 2

  // if its a normal route
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }

  // If we use the browsers back or forward button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]

    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }

  return false
}
