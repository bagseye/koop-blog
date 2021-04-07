import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  font-weight: 700;
  letter-spacing: -0.5px;
  a {
    color: var(--highlight);
  }
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Footer = () => {
  return (
    <FooterStyles>
      Designed and built by{" "}
      <a
        href="https://www.morganbaker.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Morgan Baker
      </a>
    </FooterStyles>
  )
}

export default Footer
