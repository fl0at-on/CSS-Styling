import styled from "styled-components";

export const Submit = styled.div`
  display: grid;
  grid-column: 1 / span 2;
  grid-gap: 10px;
  background-color: var(--grey-4);
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px var(--grey-4);

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;
