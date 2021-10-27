import React from "react"
import { Link } from "gatsby"

const Error = () => {
  return (
    <>
      <h1>This page has disappeared</h1>
      <Link className="btn" to="/">
        Return Home
      </Link>
    </>
  )
}

export default Error
