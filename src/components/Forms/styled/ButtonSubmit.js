import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonSubmit = styled(Link)`
  grid-column: 2;
  border: none;
  background-color: var(--base-4);
  color: var(--grey-5);
  font-weight: 500;
  letter-spacing: 4px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px var(--grey-2);
  margin-right: 5px;
  text-decoration: none;
  display: grid;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translate(0px, -1px);
    box-shadow: 0px 5px 10px var(--grey-2);
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 50px;
    grid-column: 1 / span 2;
    grid-row: 1;
    padding: none;
  }
`;
