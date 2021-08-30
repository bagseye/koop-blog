import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
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
}

h1,
.title__main {
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

main {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 30px 0 30px;
}
`

export default GlobalStyles
