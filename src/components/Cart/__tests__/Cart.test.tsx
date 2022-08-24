import { fireEvent, render, screen } from "@testing-library/react";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components";
import Cart from "..";
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

const MakeSut = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Cart />
      </ThemeProvider>
    </Provider>
  );
};

describe("Cart component", () => {
  test("display cart infos", async () => {
    store.dispatch(addToCart(productMock));
    render(<MakeSut />);
    const title = screen.queryByText(/Headset Cloud Stinger/i);
    const total = screen.getByTestId("total").textContent;
    const price = screen.getByTestId("price").textContent;
    const button = screen.queryByText(/Finalizar Compra/i);

    expect(title).toBeInTheDocument();
    expect(total).toBe("R$ 600,00");
    expect(price).toBe("R$ 600,00");
    expect(button).toBeInTheDocument();
  });
  test("click on close button set shows false", async () => {
    store.dispatch(addToCart(productMock));
    render(<MakeSut />);
    const closeButton = screen.getByTestId("close");
    fireEvent.click(closeButton);
    expect(store.getState().cart.showCart).toBeFalsy();
  });
  test("click on remove button remove item", async () => {
    store.dispatch(addToCart(productMock));
    render(<MakeSut />);
    expect(store.getState().cart.cart.length).toBe(1);
    const removeButton = screen.getByTestId("remove");
    fireEvent.click(removeButton);
    expect(store.getState().cart.cart.length).toBe(0);
  });
});
