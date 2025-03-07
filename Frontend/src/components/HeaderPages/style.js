import styled from "styled-components";

const StyledHeaderPages = styled.header`
  max-width: 100vw;
  width: 100%;
  height: 5.688rem;
  padding: 1.625rem 5.5625rem;
  background-color: var(--bg-blue-3);

  .areaHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logoHeaderPages {
    font-family: var(--family-2);
    font-weight: 700;
    font-size: 2.25rem;
    color: var(--bg-white);
  }

  .btVoltar {
    width: 8.125rem;
    height: 3.125rem;
    border-radius: 1rem;
    border: none;
    background-color: var(--bg-blue-4);
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--bg-white);
  }

  .btVoltar:hover {
    background-color: var(--bg-blue-6);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: scale(1.1);
    transition: scale(1.1);
  }

  @media (max-width: 56.25rem) {
    .logoHeaderPages {
      font-size: 1.75rem;
    }

    .btVoltar {
      width: 6.025rem;
      height: 2.9375rem;
    }
  }

  @media (max-width: 48rem) {
    padding: 1.025rem 0.8625rem;

    .logoHeaderPages {
      font-size: 1.655rem;
    }
  }
`;
export default StyledHeaderPages;
