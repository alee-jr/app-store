import type { NextPage } from "next";
import { useEffect } from "react";
import Card from "../components/Card";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { addToCart } from "../store/slices/cartSlice";
import { getProducts } from "../store/slices/productSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);
  const { showCart } = useAppSelector((state) => state.cart);
  const skeletonCards = Array(8).fill(0);

  useEffect(() => {
    const params = { page: 1, rows: 8, sortBy: "id", orderBy: "ASC" };
    dispatch(getProducts(params));
  }, [dispatch]);

  return (
    <>
      {showCart && <Cart />}
      <Layout>
        {loading &&
          skeletonCards.map((value, index: number) => <Skeleton key={index} />)}
        {products &&
          products.map((item) => (
            <Card
              key={item.id}
              buttonTitle="COMPRAR"
              description={item.description}
              image={item.photo}
              price={item.price}
              title={item.name}
              onClick={() => dispatch(addToCart(item))}
            />
          ))}
      </Layout>
    </>
  );
};

export default Home;
