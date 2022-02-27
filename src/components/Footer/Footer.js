import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { FooterStyles } from "./FooterStyles"

const year = new Date().getFullYear()

const Footer = () => {
  const {
    title,
    twitterUsername,
    facebookName,
    instagramName,
    linkedinName,
    siteAuthor,
    siteAuthorUrl,
  } = useSiteMetadata()
  return (
    <FooterStyles>
      <h2 style={{ marginTop: "0px" }} className="title__main">
        <Link to="/">{title}</Link>
      </h2>
      <div className="container">
        <ul>
          <li>
            <a href={twitterUsername} target="_blank" rel="noreferrer nofollow">
              Twitter
            </a>
          </li>
          <li>
            <a href={facebookName} target="_blank" rel="noreferrer nofollow">
              Facebook
            </a>
          </li>

          <li>
            <a href={instagramName} target="_blank" rel="noreferrer nofollow">
              Instagram
            </a>
          </li>

          <li>
            <a href={linkedinName} target="_blank" rel="noreferrer nofollow">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        Koop - &copy; {year} Designed and built by{" "}
        <a href={siteAuthorUrl} target="_blank" rel="noopener noreferrer">
          {siteAuthor}
        </a>{" "}
        | <Link to="/privacy">Privacy Statement</Link>
      </div>
    </FooterStyles>
  )
}

export default Footer
