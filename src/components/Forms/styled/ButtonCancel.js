import styled from "styled-components";

export const ButtonCancel = styled.button`
  grid-column: 1;
  font-weight: 500;
  letter-spacing: 4px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid var(--grey-4);
  margin-left: 5px;

  &:hover {
    border: 1px solid var(--grey-2);
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 50px;
    grid-column: 1 / span 2;
    grid-row: 2;
  }
`;
