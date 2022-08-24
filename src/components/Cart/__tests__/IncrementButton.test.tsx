import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components";
import IncrementButton from "../IncrementButton";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { addToCart } from "../../../store/slices/cartSlice";

const productMock = {
  id: 8,
  name: "Headset Cloud Stinger",
  brand: "HyperX",
  description:
    "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: "600.00",
  quantity: 1,
};

interface MakeSutProps {
  quantity: number;
  id: number;
}

const MakeSut = ({ id, quantity }: MakeSutProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <IncrementButton id={id} quantity={quantity} />
      </ThemeProvider>
    </Provider>
  );
};

describe("IncrementButton component", () => {
  test("should render IncrementButton", async () => {
    const component = render(<MakeSut id={8} quantity={1} />);
    expect(component).toBeTruthy();
  });
  test("decrease button", async () => {
    store.dispatch(addToCart(productMock));
    render(<MakeSut id={8} quantity={2} />);
    const decrementButton = screen.getByTestId("decrement");
    fireEvent.click(decrementButton);
    expect(
      store.getState().cart.cart.find((item) => item.id === 8)?.quantity
    ).toBe(1);
  });
  test("increment button", async () => {
    store.dispatch(addToCart(productMock));
    render(<MakeSut id={8} quantity={2} />);
    const incrementButton = screen.getByTestId("increment");
    fireEvent.click(incrementButton);
    expect(
      store.getState().cart.cart.find((item) => item.id === 8)?.quantity
    ).toBe(3);
  });
});
