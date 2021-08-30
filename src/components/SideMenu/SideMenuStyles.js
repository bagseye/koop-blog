import styled from "styled-components"

export const SideMenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--dark);
  height: 100vh;
  text-align: left;
  padding: 2rem 5rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 100;

  @media (max-width: 767px) {
    width: 100%;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    display: none;
  }

  li {
    margin: 1rem 0;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    color: #fff;
    text-decoration: none;

    @media (max-width: 767px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`
