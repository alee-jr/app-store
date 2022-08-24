import Image from "next/image";
import {
  Badge,
  AddCart,
  Price,
  TextContainer,
  TextDescription,
  Title,
  Wrapper,
} from "./styles";
import { convertToCurrency } from "../../utils/common";
import ShoppingBagIcon from "../../../public/images/shopping-bag.svg";

interface CardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  buttonTitle: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  buttonTitle,
  description,
  image,
  price,
  title,
  onClick,
}) => {
  return (
    <Wrapper>
      <Image alt={title} height={138} width={170} layout="fixed" src={image} />
      <TextContainer>
        <Title>{title}</Title>
        <Badge>
          <Price>{convertToCurrency(Number(price))}</Price>
        </Badge>
      </TextContainer>
      <TextDescription>{description}</TextDescription>
      <AddCart onClick={onClick}>
        <Image alt="shopping bag" layout="intrinsic" src={ShoppingBagIcon} />
        <span>{buttonTitle}</span>
      </AddCart>
    </Wrapper>
  );
};

export default Card;
