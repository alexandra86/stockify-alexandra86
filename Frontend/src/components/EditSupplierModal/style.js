import styled from "styled-components";

export const StyledContainerModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContent {
    max-width: 23.0625rem;
    width: 100%;
    height: auto;
    border-radius: 1.25rem;
    background-color: var(--bg-blue-3);
    animation: registerAnimation 1.5s ease-in;
    transform: 1.5s ease-in;
  }
  .headerModal {
    max-width: 23.0625rem;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .titleModal {
    font-family: var(--family-2);
    font-weight: 700;
    font-size: 1rem;
    color: var(--bg-white);
  }
  .btCloseModal {
    max-width: 0.6875rem;
    width: 100%;
    height: 1.625rem;
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 1rem;
    color: var(--bg-white);
  }
  .btCloseModal:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
    transform: scale(1.1);
    transition: scale(1.1);
  }
  .formModal {
    max-width: 23.0625rem;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: var(--bg-blue-3);
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    border-radius: 0rem 0rem 1.25rem 1.25rem;
    overflow: auto;
  }
  .labelModal {
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 0.76125rem;
    color: var(--bg-white);
  }
  .inputModal {
    max-width: 20.620625rem;
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    background-color: var(--bg-white);
    border: 0.07625rem solid var(--bg-ligth-purple);
    border-radius: 1.25rem;
    color: var(--bg-gray-1);
  }
  .inputModal::placeholder {
    color: var(--bg-gray-1);
    opacity: 0.9;
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1.015rem;
  }

  .areaError {
    color: var(--bg-red);
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 0.75rem;
  }
  .btRegisterModal {
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    max-width: 20.25rem;
    width: 100%;
    height: 3rem;
    padding: 0rem 1.375rem;
    background-color: var(--bg-blue-5);
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 1rem;
    color: var(--bg-white);
    border-radius: 0.25rem;
  }
  .btRegisterModal:hover {
    background-color: var(--bg-blue-4);
  }

  @media (max-width: 62.5rem) {
    .modalContent {
      overflow-y: auto;
      height: 31.25rem;
    }
  }

  @media (max-width: 43.75rem) {
    .modalContent {
      width: 90%;
    }
  }

  @keyframes registerAnimation {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
