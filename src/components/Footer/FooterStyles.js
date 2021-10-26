import styled from "styled-components"

export const FooterStyles = styled.footer`
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
  margin-top: 5rem;
  padding: 0 30px 2rem 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;

  .container {
    max-width: 800px;
    text-align: center;

    ul {
      display: flex;

      li {
        padding: 10px 6px;
      }
    }
  }

  h2 {
    a {
      text-decoration: none;
      transition: color 0.3s;
    }

    &:hover {
      a {
        color: var(--highlight);
      }
    }
  }
`
