import { CartList } from "../store/slices/cartSlice";

export const parseParamsObject = (params: any): string => {
  return Object.keys(params)
    .map((obj) => {
      return params[obj] !== null && params[obj] !== undefined
        ? `${obj}=${params[obj]}`
        : false;
    })
    .filter((p) => p !== false)
    .join("&");
};

export const cartTotalCalc = (list: CartList[]): number => {
  const listPrice = list.map((item) => ({
    price: Number(item.price),
    quantity: Number(item.quantity),
  }));
  const total = listPrice.reduce((a, c) => a + c.price * c.quantity, 0);
  return total;
};

export const convertToCurrency = (value: number): string => {
  const currencyValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  return currencyValue;
};
