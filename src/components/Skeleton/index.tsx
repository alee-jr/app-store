import {
  PictureSkeleton,
  ProductSkeleton,
  TextContainer,
  Wrapper,
} from "./styles";

const Skeleton: React.FC = () => {
  return (
    <Wrapper>
      <PictureSkeleton />
      <TextContainer>
        <ProductSkeleton width="60%" />
        <ProductSkeleton width="30%" />
      </TextContainer>
      <ProductSkeleton />
      <ProductSkeleton width="100%" marginBottom="0" />
    </Wrapper>
  );
};

export default Skeleton;
