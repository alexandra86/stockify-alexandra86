import styled from "styled-components";

const StyledHeaderHomePage = styled.header`
  max-width: 100vw;
  width: 100%;
  height: 5.688rem;
  padding: 1.625rem 5.5625rem;
  background-color: var(--bg-blue-3);
  position: relative;

  .areaMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logoHomePage {
    font-family: var(--family-2);
    font-weight: 700;
    font-size: 2.25rem;
    color: var(--bg-white);
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease-in-out;
  }

  .links {
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--bg-white);
    text-decoration: none;
  }

  .btEntrar {
    width: 8.125rem;
    height: 3.125rem;
    border-radius: 1rem;
    border: none;
    background-color: var(--bg-blue-6);
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--bg-white);
  }

  .btEntrar:hover {
    background-color: var(--bg-blue-4);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: scale(1.1);
    transition: scale(1.1);
  }

  .btEntrar.mobile {
    display: none;
  }

  .menuToggle {
    display: none;
    background: none;
    border: none;
    color: var(--bg-white);
  }

  @media (max-width: 56.25rem) {
    .logoHomePage {
      font-size: 1.75rem;
    }

    .links {
      font-size: 1rem;
    }

    .btEntrar {
      width: 6.025rem;
      height: 2.9375rem;
    }
  }

  @media (max-width: 48rem) {
    .logoHomePage {
      font-size: 1.655rem;
    }

    .menu {
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: var(--bg-blue-3);
      padding: 1rem 0;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
    }

    .menu.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      z-index: 1;
    }

    .links {
      width: 100%;
      font-size: 1rem;
      text-align: center;
    }

    .btEntrar.mobile {
      display: block;
      margin-top: 1rem;
    }

    .btEntrar.desktop {
      display: none;
    }

    .menuToggle {
      display: block;
    }
  }
`;

export default StyledHeaderHomePage;
