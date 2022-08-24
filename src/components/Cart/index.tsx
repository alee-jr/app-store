import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { removeItem, setShowCart } from "../../store/slices/cartSlice";
import { cartTotalCalc, convertToCurrency } from "../../utils/common";
import ButtonIncrement from "./IncrementButton";
import {
  Badge,
  BuyButton,
  CloseIcon,
  Group,
  Item,
  ItemPrice,
  ItemTitle,
  List,
  Price,
  Title,
  TitleContainer,
  TotalBox,
  TotalText,
  Wrapper,
} from "./styles";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <Wrapper>
      <TitleContainer>
        <Title>
          Carrinho <br /> de compras
        </Title>
        <CloseIcon
          display="relative"
          data-testid="close"
          onClick={() => dispatch(setShowCart(false))}
        />
      </TitleContainer>
      <List>
        {cart &&
          cart.length > 0 &&
          cart.map((item) => (
            <Item key={item.id}>
              <Image alt="" src={item.photo} width={50} height={60} />
              <ItemTitle>{item.name}</ItemTitle>
              <Group>
                <ButtonIncrement id={item.id} quantity={item.quantity!} />
                <Badge>
                  <ItemPrice data-testid="price">
                    {convertToCurrency(Number(item.price))}
                  </ItemPrice>
                </Badge>
              </Group>
              <CloseIcon
                data-testid="remove"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </Item>
          ))}
      </List>
      <TotalBox>
        <TotalText>Total:</TotalText>
        <Price data-testid="total">
          {convertToCurrency(cartTotalCalc(cart))}
        </Price>
      </TotalBox>
      <BuyButton>Finalizar Compra</BuyButton>
    </Wrapper>
  );
};

export default Cart;
