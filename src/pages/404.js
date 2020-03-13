import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <h1>This page has disappeared</h1>
      <Link className="btn" to="/">
        Return Home
      </Link>
    </Layout>
  )
}

export default Error
