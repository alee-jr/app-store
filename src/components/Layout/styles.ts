import styled from "styled-components";

export const WrapperLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 900px) {
    height: fit-content;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 2rem;
  place-items: center;
  margin: 1rem 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;
