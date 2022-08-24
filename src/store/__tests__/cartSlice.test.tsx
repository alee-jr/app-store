import { store } from "../store";
import {
  addToCart,
  changeQuantity,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  setShowCart,
} from "../slices/cartSlice";

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

describe("cartSlice", () => {
  test("setShowCart", () => {
    let state = store.getState().cart;
    store.dispatch(setShowCart(true));
    state = store.getState().cart;
    expect(state.showCart).toBeTruthy();
  });
  test("addToCart", () => {
    let state = store.getState().cart;
    const initialCartCount = state.cart.length;
    store.dispatch(addToCart(productMock));
    state = store.getState().cart;
    const newlyAddedProduct = state.cart.find((item) => item.id === 8);
    expect(newlyAddedProduct?.name).toBe("Headset Cloud Stinger");
    expect(newlyAddedProduct?.brand).toBe("HyperX");
    expect(newlyAddedProduct?.description).toBe(
      "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade."
    );
    expect(newlyAddedProduct?.photo).toBe(
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp"
    );
    expect(newlyAddedProduct?.price).toBe("600.00");
    expect(newlyAddedProduct?.quantity).toBe(1);
    expect(state.cart.length).toBeGreaterThan(initialCartCount);
  });
  test("decrementQuantity", () => {
    let state = store.getState().cart;
    store.dispatch(decrementQuantity(8));
    state = store.getState().cart;
    const product = state.cart.find((item) => item.id === 8);
    expect(product?.quantity).toBe(1);
  });
  test("incrementQuantity", () => {
    let state = store.getState().cart;
    store.dispatch(incrementQuantity(8));
    state = store.getState().cart;
    const product = state.cart.find((item) => item.id === 8);
    expect(product?.quantity).toBe(2);
  });
  test("removeItem", () => {
    let state = store.getState().cart;
    store.dispatch(removeItem(8));
    state = store.getState().cart;
    expect(state.cart.length).toBe(0);
  });

  test("changeQuantity", () => {
    store.dispatch(addToCart(productMock));
    let state = store.getState().cart;
    store.dispatch(changeQuantity({ id: 8, quantity: 10 }));
    state = store.getState().cart;
    const product = state.cart.find((item) => item.id === 8);
    expect(product?.quantity).toBe(10);
  });
});
