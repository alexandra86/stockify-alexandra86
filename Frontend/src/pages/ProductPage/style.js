import styled from "styled-components";

const StyledProductsPageMain = styled.main`
  margin-top: 20px;
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
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

  .tittleProduct {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-family: var(--family-2);
    font-weight: 600;
    font-size: 1.875rem;
    color: var(--bg-gray-1);
  }

  .btAddProduct {
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

  .btAddProduct:hover {
    background-color: var(--bg-blue-6);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: scale(1.1);
    transition: scale(1.1);
  }

  @media (max-width: 56.25rem) {
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  }

  @media (max-width: 48rem) {
    padding: 4rem 0.625rem 0rem 0.625rem;

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

export default StyledProductsPageMain;
