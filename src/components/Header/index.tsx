import { Badge, SubTitle, TextContainer, Title, Wrapper } from "./styles";
import cartIcon from "../../../public/images/cart.svg";
import Image from "next/future/image";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setShowCart } from "../../store/slices/cartSlice";

const Header: React.FC = () => {
  const { showCart, cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <TextContainer>
        <Title>MKS</Title>
        <SubTitle>Sistemas</SubTitle>
      </TextContainer>
      <Badge onClick={() => dispatch(setShowCart(!showCart))}>
        <Image alt="Cart" src={cartIcon} />
        <span>{cart.length}</span>
      </Badge>
    </Wrapper>
  );
};

export default Header;
