import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Error = () => {
  return (
    <Layout>
      <hr className="separator separator__large" />
      <h1>This page has disappeared</h1>
      <hr className="separator" />
      <Link className="btn" to="/">
        Return Home
      </Link>
    </Layout>
  )
}

export default Error
