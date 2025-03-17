import styled from "styled-components";

const StyledSuplierPageMain = styled.main`
  margin-top: 20px;
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.625rem 0rem 0.625rem;

  .btAddSupplier {
    width: 15.125rem;
    height: 3.125rem;
    border-radius: 1rem;
    border: none;
    background-color: var(--bg-blue-4);
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1rem;
    color: var(--bg-white);
  }

  .btAddSupplier:hover {
    background-color: var(--bg-blue-6);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: scale(1.1);
    transition: scale(1.1);
  }
`;

export default StyledSuplierPageMain;
