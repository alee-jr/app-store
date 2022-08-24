import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 13.598rem;
  height: 17.813rem;
  justify-content: space-between;
  background-color: ${(prop) => prop.theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  align-items: center;
  padding-top: 0.625rem;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.625rem;
  margin-top: 1rem;
  margin-bottom: 0.625rem;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: ${(prop) => prop.theme.colors.gray};
  margin-right: 0.313rem;
`;

export const Badge = styled.div`
  background-color: ${(prop) => prop.theme.colors.tertiary};
  border-radius: 0.313rem;
  padding: 0.313rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.span`
  color: ${(prop) => prop.theme.colors.white};
  font-weight: 700;
  font-size: 0.938rem;
`;

export const TextDescription = styled.p`
  font-size: 0.625rem;
  color: ${(prop) => prop.theme.colors.gray};
  padding: 0 0.625rem;
  margin-bottom: 0.5rem;
`;

export const AddCart = styled.button`
  color: ${(prop) => prop.theme.colors.white};
  font-weight: 600;
  font-size: 0.875rem;
  border: 0;
  background-color: ${(prop) => prop.theme.colors.primary};
  border-radius: 0 0 0.5rem 0.5rem;
  height: 1.994rem;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  > span {
    margin-left: 0.625rem;
    font-family: ${(props) => props.theme.fonts.primary};
  }
`;
