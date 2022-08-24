import { getProducts } from "../slices/productSlice";
import { store } from "../store";
import MockAdapter from "axios-mock-adapter";
import api from "../api";
import { parseParamsObject } from "../../utils/common";

const getProductsResponse = [
  {
    id: 1,
    name: "Headset Cloud Stinger",
    brand: "HyperX",
    description:
      "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    price: "600.00",
    createdAt: "2022-08-21T19:30:29.567Z",
    updatedAt: "2022-08-21T19:30:29.567Z",
  },
];

const params = { page: 1, rows: 5, sortBy: "id", orderBy: "ASC" };

const mockNetworkResponse = () => {
  const mock = new MockAdapter(api);
  mock
    .onGet(`products?${parseParamsObject(params)}`)
    .reply(200, getProductsResponse);
};

describe("productSlice", () => {
  beforeAll(() => {
    mockNetworkResponse();
  });
  test("getProducts", async () => {
    const result = await store.dispatch(getProducts(params));
    let state = store.getState().products.products;
    const products = result.payload;
    state = products;
    expect(result.type).toBe("products/fulfilled");
    expect(getProductsResponse).toEqual(products);
    expect(state).toEqual(products);
  });
});
