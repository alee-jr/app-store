import styled, { keyframes } from "styled-components";

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Wrapper = styled.div`
  width: 13.598rem;
  height: 17.813rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

interface ProductSkeletonProps {
  width?: string;
  marginBottom?: string;
}

export const ProductSkeleton = styled.div<ProductSkeletonProps>`
  display: inline-block;
  height: 1.875rem;
  width: ${(props) => props.width || "80%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: ${(props) => props.theme.colors.darkgray};
  background-image: ${(props) => `linear-gradient(
    90deg,
    ${props.theme.colors.darkgray},
    #f5f5f5,
    ${props.theme.colors.darkgray}
    )`};
  background-size: 12.5rem 100%;
  background-repeat: no-repeat;
  border-radius: 0.25rem;
  margin-bottom: ${(props) => props.marginBottom || "0.5rem"};
`;

export const PictureSkeleton = styled(ProductSkeleton)`
  width: 80%;
  height: 8.625rem;
  margin-top: 1rem;
  display: block;
`;
