import styled from "styled-components";

export const Input = styled.input`
  grid-column: 2;
  padding-top: 10px;
  height: 50%;
  margin-right: 10px;
  background-color: var(--grey-4);
  border: none;
  border-radius: 5px;

  &:focus {
    background-color: var(--grey-3);
  }
`;
