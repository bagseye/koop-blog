import React from "react"
import { createGlobalStyle } from "styled-components"
import "typeface-heebo"
import SEO from "../components/Seo"

const GlobalStyle = createGlobalStyle`
:root {
  --dark: #1a1a1a;
  --grey: #7c7c7c;
  --highlight: #0075FF;
}

body {
  color: var(--dark);
  font-family: Heebo, Arial, Helvetica, 'Helvetica Neue', sans-serif;
  padding: 2rem 1.5rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  letter-spacing: -2px;
  line-height: 1.1em;

  &:after {
    content: '.';
    display: inline-block;
    color: var(--highlight);
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--grey);
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.25em;
  letter-spacing: -0.5px;
}

.gatsby-resp-image-wrapper {
  max-width: 800px!important;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.btn {
    color: var(--highlight);
    font-weight: 700;
    margin-top: 1.25rem;
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    text-decoration: none;
    text-transform: capitalize;
  }

main,
footer {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

footer {
  font-weight: 700;
  letter-spacing: -0.5px;
  a {
    color: var(--highlight);
  }
}
`

const layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Koop Blog</title>
      </Helmet> */}
      <SEO />
      <main>{children}</main>
      <footer>
        Designed and built by{" "}
        <a
          href="https://www.morganbaker.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Morgan Baker
        </a>{" "}
        | Enquiries{" "}
        <a
          href="https://www.linkedin.com/in/morgan-baker-developer-inverness/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Morgan
        </a>
      </footer>
    </>
  )
}

export default layout
