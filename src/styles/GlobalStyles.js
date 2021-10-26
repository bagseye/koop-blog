import { createGlobalStyle } from "styled-components"
import "normalize.css"

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 16px;
  --dark: #2b2b2b;
  --grey: #7c7c7c;
  --highlight: #0075FF;
}

* {
  box-sizing: border-box;
}

ul,
ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

body {
  color: var(--dark);
  font-family: Heebo, Arial, Helvetica, 'Helvetica Neue', sans-serif;
  padding: 2rem 1.5rem;
  margin: 0;
  padding: 150px 0 0 0;
  font-size: 1.2rem;
  line-height: 1.4;

  &::-webkit-scrollbar {
      width: 12px;
  }

  &::-webkit-scrollbar-track {
      background: var(--highlight);
  }

  &::-webkit-scrollbar-thumb {
      background-color: var(--dark);
      border-radius: 0px;
  }
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

main {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 30px 0 30px;
}

hr {
  &.separator {
    height: 3px;
    border: none;
    background-color: #000;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    &.separator__large {
      height: 6px;
    }
  }
}
`

export default GlobalStyles
