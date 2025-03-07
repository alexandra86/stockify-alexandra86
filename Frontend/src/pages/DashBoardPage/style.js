import styled from "styled-components";

const StyledDashMain = styled.main`
  .areaWelcome {
    margin: 0.625rem 0rem 0.625rem 0rem;
    max-width: 100vw;
    width: 100%;
    height: 5.688rem;
    padding: 1.625rem 5.5625rem;
    background-color: var(--bg-ligth-green);
    text-align: center;
    border: 0.0625rem solid var(--bg-ligth-green);
  }
  .fraseWelcome {
    font-family: var(--family-2);
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--bg-gray-1);
  }

  .slideShow {
    margin-top: 20px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
  }

  @media (max-width: 56.25rem) {
    .fraseWelcome {
      font-size: 1rem;
    }
  }

  @media (max-width: 48rem) {
    .areaWelcome {
      height: 2.68rem;
      padding: 0.625rem;
    }
    .fraseWelcome {
      font-size: 0.75rem;
    }
  }
`;

export default StyledDashMain;
