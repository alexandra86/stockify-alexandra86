import styled from "styled-components";

const StyledSuplierPageMain = styled.main`
  margin-top: 1.25rem;
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 5.5625rem 0rem 5.5625rem;

  .areaSupplierButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

  .tittleSupplier {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-family: var(--family-2);
    font-weight: 600;
    font-size: 1.875rem;
    color: var(--bg-gray-1);
    text-align: center;
  }

  .tableSupplier {
    margin-top: 2.1875rem;
    max-width: 73.1875rem;
    width: 100%;
    height: auto;
  }

  .tableHead {
    width: 100%;
    height: 2rem;
    padding: 0.625rem 0.1875rem;
    text-align: center;
  }

  .tableColumn {
    font-family: var(--family-1);
    font-weight: 700;
    font-size: 1rem;
    background-color: var(--bg-blue-3);
  }

  .columns {
    min-width: 16.25rem;
    color: var(--bg-white);
  }

  .columnsEditar {
    min-width: 5.625rem;
    font-size: var(--family-1);
    font-weight: 700;
    font-size: 1rem;
    color: var(--bg-white);
  }

  .lineEditar {
    border: solid 0.125rem var(--bg-blue-5);
    background-color: var(--bg-gray-4);
    padding: 0.125rem 0.25rem;
    text-align: center;
    cursor: pointer;
  }

  .line {
    border: solid 2px var(--bg-blue-5);
    background-color: var(--bg-gray-4);
    padding: 0.125rem 0.25rem;
    text-align: center;
    font-family: var(--family-1);
    font-weight: 700;
    font-size: 0.9375rem;
    color: var(--bg-gray-1);
  }

  @media (max-width: 48rem) {
    .tittleSupplier {
      font-size: 1.0625rem;
    }
    .btAddSupplier {
      font-size: 0.875rem;
    }
  }
`;

export default StyledSuplierPageMain;
