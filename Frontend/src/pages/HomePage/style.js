import styled from "styled-components";

const StyledHomePage = styled.main`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.625rem 0rem 0.625rem;

  .sectionLogoHome {
    margin-top: 1.25rem;
    max-width: 33.25rem;
    width: 100%;
    height: 27.125rem;
  }

  .logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sectionApresentation {
    margin-top: 1.875rem;
    max-width: 31.25rem;
    width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .words {
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1.625rem;
    color: var(--bg-gray-1);
    line-height: 6.875rem;
  }

  .fraseSucess {
    margin-top: 0.625rem;
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--bg-black);
  }

  @media (max-width: 56.25rem) {
    .words {
      line-height: 6.125rem;
      font-size: 1.25rem;
    }

    .fraseSucess {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 48rem) {
    gap: 0rem;
    flex-direction: column-reverse;
    height: auto;

    .sectionApresentation {
      height: auto;
    }

    .words {
      line-height: 5.625rem;
      font-size: 1.125rem;
    }

    .fraseSucess {
      font-size: 1rem;
    }
  }
`;

export default StyledHomePage;
