import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { FooterStyles } from "./FooterStyles"

const year = new Date().getFullYear()

const Footer = () => {
  const { twitterUsername, facebookName, instagramName } = useSiteMetadata()
  return (
    <FooterStyles>
      <h2 style={{ marginTop: "0px" }} className="title__main">
        Koop
      </h2>
      <div className="container">
        <ul>
          <li>
            <a href={twitterUsername} target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href={facebookName} target="_blank">
              Facebook
            </a>
          </li>

          <li>
            <a href={instagramName} target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        Koop - &copy; {year} Designed and built by{" "}
        <a
          href="https://www.morganbaker.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Morgan Baker
        </a>{" "}
        | <Link to="/privacy">Privacy Statement</Link>
      </div>
    </FooterStyles>
  )
}

export default Footer
