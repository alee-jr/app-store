import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export type CartList = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity?: number;
};

export interface CartState {
  cart: CartList[];
  showCart: boolean;
}

const initialState: CartState = {
  cart: [] as CartList[],
  showCart: false,
} as const;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart: (
      state: Draft<typeof initialState>,
      action: { payload: boolean }
    ) => {
      state.showCart = action.payload;
    },
    changeQuantity: (
      state: Draft<typeof initialState>,
      action: { payload: { id: number; quantity: number } }
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    addToCart: (
      state: Draft<typeof initialState>,
      action: PayloadAction<CartList>
    ) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity!++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (
      state: Draft<typeof initialState>,
      action: PayloadAction<CartList["id"]>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item!.quantity === 100) {
        item!.quantity = 100;
      } else {
        item!.quantity!++;
      }
    },
    decrementQuantity: (
      state: Draft<typeof initialState>,
      action: PayloadAction<CartList["id"]>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item!.quantity === 1) {
        item!.quantity = 1;
      } else {
        item!.quantity!--;
      }
    },
    removeItem: (
      state: Draft<typeof initialState>,
      action: PayloadAction<CartList["id"]>
    ) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const getCartState = (state: { cart: CartState }) => state.cart;

export const {
  setShowCart,
  changeQuantity,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
