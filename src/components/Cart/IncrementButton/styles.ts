import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.019rem solid #bfbfbf;
  width: 1.875rem;
  height: 1.25rem;
  padding: 0.688rem 0;
  background-color: ${(props) => props.theme.colors.white};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:first-of-type {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  &:last-of-type {
    border-radius: 0 0.25rem 0.25rem 0;
  }

  @media (max-width: 900px) {
    height: 2.176rem;
  }
`;

export const InputNumber = styled.input`
  text-align: center;
  border: none;
  border-top: 0.019rem solid #bfbfbf;
  border-bottom: 0.019rem solid #bfbfbf;
  width: 1.875rem;
  height: 1.25rem;
  padding: 0.688rem 0;
  outline: none;
  -webkit-appearance: none;

  @media (max-width: 900px) {
    height: 2.176rem;
  }
`;
