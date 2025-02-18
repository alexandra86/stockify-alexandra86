import styled from "styled-components";

const StyledDasBoardMain = styled.main`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.625rem 0rem 0.625rem;

  .areaCards {
    margin-top: 1.25rem;
    margin-bottom: 0.625rem;
    max-width: 75rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    gap: 0.625rem;
  }

  @media (max-width: 56.25rem) {
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  }

  @media (max-width: 48rem) {
    padding: 7rem 0.625rem 0rem 0.625rem;

    .areaCards {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 0.625rem;
    }
  }
`;

export default StyledDasBoardMain;
