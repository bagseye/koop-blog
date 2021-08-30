import styled from "styled-components"

export const NavStyles = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    list-style: none;

    li {
      padding: 0.5rem 1rem;
      font-weight: 700;
      font-size: 1.25rem;

      a {
        color: var(--dark);
        text-decoration: none;
        transition: color 0.3s ease;
      }

      &:hover {
        a {
          color: var(--highlight);
        }
      }
    }
  }
`
