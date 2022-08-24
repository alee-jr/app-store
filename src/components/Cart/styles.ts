import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  right: 0;
  z-index: 99;
  max-width: 30.375rem;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  background-color: ${(props) => props.theme.colors.primary};
`;

interface CloseIconProps {
  display?: string;
}

export const CloseIcon = styled.button<CloseIconProps>`
  position: ${(props) => props.display || "absolute"};
  display: block;
  box-sizing: border-box;
  width: 1.25rem;
  height: 1.25rem;
  z-index: 99;
  right: ${(props) => !props.display && "-0.313rem"};
  top: ${(props) => !props.display && "-0.313rem"};
  border: 0.188rem solid ${(props) => props.theme.colors.secondary};
  border-radius: 100%;
  background: -webkit-linear-gradient(
      -45deg,
      transparent 0%,
      transparent 46%,
      white 46%,
      white 56%,
      transparent 56%,
      transparent 100%
    ),
    -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white 46%, white
          56%, transparent 56%, transparent 100%);
  background-color: ${(props) => props.theme.colors.secondary};
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    top: ${(props) => !props.display && "0.313rem"};
    right: ${(props) => !props.display && "0.313rem"};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 10%;
`;

export const Title = styled.h2`
  font-size: 1.688rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  width: 100%;
  height: 70%;
  max-height: 70%;
  padding: 1rem 0;
`;

export const Item = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 80%;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  position: relative;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.3rem;
  column-gap: 1rem;
  padding: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemTitle = styled.p`
  font-size: 0.813rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const Group = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  @media (max-width: 900px) {
    height: 2.176rem;
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 0.313rem;
    padding: 0 1rem;
  }
`;

export const ItemPrice = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 900px) {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 10%;
`;

export const TotalText = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 1.75rem;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 1.75rem;
`;

export const BuyButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  font-weight: 700;
  font-size: 1.75rem;
  width: 100%;
  height: 10%;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  border: 0;
`;
