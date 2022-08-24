import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.125rem;
  background-color: ${(props) => props.theme.colors.darkgray};
`;

export const TextDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
`;
