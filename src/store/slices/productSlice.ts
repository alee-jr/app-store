import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { parseParamsObject } from "../../utils/common";
import api from "../api";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

export interface ProductState {
  products: null | Product[];
  loading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: null,
  loading: false,
  error: "",
} as const;

interface ProductsParams {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

export const getProducts = createAsyncThunk(
  "products",
  async (params: ProductsParams, { rejectWithValue }) => {
    try {
      const response = await api.get(`products?${parseParamsObject(params)}`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProducts.pending,
      (state: { loading: boolean }, action: any) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getProducts.fulfilled,
      (
        state: typeof initialState,
        action: { payload: typeof initialState }
      ) => {
        state.loading = false;
        state.products = action.payload.products;
      }
    );
    builder.addCase(
      getProducts.rejected,
      (state: typeof initialState, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export const getProductState = (state: { product: ProductState }) =>
  state.product;

export default productSlice.reducer;
