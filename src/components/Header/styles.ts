import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  height: 6.313rem;
  width: 100%;
  align-items: center;
  padding: 0 3%;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    height: 3rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: fit-content;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.188rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.white};
  margin-left: 0.625rem;
  font-weight: 300;
  line-height: 0.9rem;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const Badge = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  width: 5.625rem;
  height: 2.813rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;

  > img {
    height: 1.125rem;
    width: 1.188rem;
  }

  > span {
    margin-left: 0.9rem;
    font-size: 1.125rem;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    width: 3.25rem;
    height: 1.625rem;

    > span {
      margin-left: 0.5rem;
      font-size: 0.75rem;
    }

    > img {
      height: 0.625rem;
      width: 0.625rem;
    }
  }
`;
