import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const FooterStyles = styled.footer`
  font-weight: 700;
  letter-spacing: -0.5px;
  a {
    color: #222;
    text-decoration-color: rgba(0, 0, 0, 0.15);
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
    transition: text-decoration-color 0.3s;

    &:hover {
      text-decoration-color: #222;
    }
  }
  padding: 25px 30px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e1e1e1;
  color: #222;

  .container {
    max-width: 800px;
    text-align: center;
  }
`

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterStyles>
      <h2 style={{ marginTop: "0px" }} className="title__main">
        Koop
      </h2>
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
