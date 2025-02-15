import styled from "styled-components";

export const StyledNotFound = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  border-radius: 50%;

  .imgError {
    border-radius: 50%;
    border-radius: 50%;
    max-width: 80%;
  }

  .btComeBack {
    margin-top: 1.875rem;
    max-width: 5.625rem;
    width: 100%;
    height: 3.75rem;
    padding: 0rem 0.5rem;
    border-radius: 1rem;
    border: 0.07625rem solid var(--bg-purple);
    background-color: var(--bg-purple);
    font-family: var(--family-1);
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--bg-gray-5);
  }
  .btComeBack:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: scale(1.1);
    transition: scale(1.1);
  }
`;
