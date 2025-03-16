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
    border-radius: 0.25rem;
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
    font-family: var(--family-1);
    font-weight: 700;
    font-size: 0.875rem;
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
    background-color: var(--bg-white);
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    overflow: auto;
  }
  .labelModal {
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 0.76125rem;
    color: var(--bg-gray-1);
  }
  .inputModal {
    max-width: 20.620625rem;
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    background-color: var(--bg-gray-3);
    border: 0.07625rem solid var(--bg-gray-1);
    border-radius: 0.25rem;
    color: var(--bg-gray-1);
  }
  .inputModal::placeholder {
    color: var(--bg-gray-1);
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1.015rem;
  }
  .selectModal {
    max-width: 20.620625rem;
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    background-color: var(--bg-gray-3);
    border: 0.07625rem solid var(--bg-gray-1);
    border-radius: 0.25rem;
    color: var(--bg-gray-1);
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1.015rem;
  }
  .textAreaModal {
    padding: 0.5rem;
    background-color: var(--bg-gray-3);
    border: 0.07625rem solid var(--bg-gray-1);
    border-radius: 0.25rem;
    color: var(--bg-gray-1);
  }

  .textAreaModal::placeholder {
    color: var(--bg-gray-1);
    font-family: var(--family-1);
    font-weight: 400;
    font-size: 1.015rem;
  }

  .fileUploadLabel {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.313rem;
    font-size: 0.75rem;
    font-family: var(--family-1);
    color: var(--bg-gray-1);
    cursor: pointer;
  }

  .imageFileUpload {
    width: 2.5rem;
    height: 2.5rem;
  }

  .imageFileUpload:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
    transform: scale(1.1);
    transition: scale(1.1);
  }

  .areaError {
    color: red;
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 0.75rem;
  }
  .btRegisterModal {
    margin-bottom: 0.625rem;
    max-width: 20.25rem;
    width: 100%;
    height: 3rem;
    padding: 0rem 1.375rem;
    background-color: var(--bg-blue-3);
    font-family: var(--family-1);
    font-weight: 500;
    font-size: 1rem;
    color: var(--bg-white);
    border-radius: 0.25rem;
  }
  .btRegisterModal:hover {
    background-color: var(--bg-blue-5);
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
