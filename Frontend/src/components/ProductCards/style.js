import styled from "styled-components";

const StyledProductCards = styled.li`
  max-width: 35.875rem;
  width: 100%;
  max-height: 23.625rem;
  height: 100%;
  padding: 0.62rem 0.625rem 0.6rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5625rem;
  background-color: var(--bg-white);
  border-radius: 0.25rem;
  border: solid 0.125rem var(--bg-gray-3);
  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
  animation: productAnimation 1.5s ease-in;
  transform: 1.5s ease-in;

  .areaImgProduct {
    max-width: 11.8125rem;
    width: 100%;
    max-height: 23.25rem;
    height: 100%;
  }

  .imgProduct {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .areaInfoProduct {
    display: flex;
    flex-direction: column;
    gap: 0.4375rem;
  }

  .identifaction {
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1rem;
    color: var(--bg-gray-1);
  }

  .infosProduct {
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1rem;
    color: var(--bg-gray-1);
    line-height: 1.375rem;
  }

  .areaImageAndBtEdit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btEditar {
    max-width: 100px;
    width: 100%;
    height: 2.5rem;
    padding: 0.125rem;
    background-color: var(--bg-blue-3);
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--bg-white);
    border-radius: 0.25rem;
  }

  .btEditar:hover {
    background-color: var(--bg-blue-4);
  }

  @media (max-width: 56.25rem) {
    max-width: 32.8125rem;

    .areaImgProduct {
      max-width: 10.9375rem;
    }

    .identifaction,
    .infosProduct {
      font-size: 0.9375rem;
    }
  }

  @media (max-width: 48rem) {
    margin-bottom: 0.625rem;
    padding: 0.6rem;
    min-width: 19.0625rem;

    .infosProduct {
      line-height: 1.125rem;
    }
  }
  @keyframes productAnimation {
    from {
      opacity: 0;
      transform: translateX(-70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export default StyledProductCards;
