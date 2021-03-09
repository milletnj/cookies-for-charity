import React from "react";
import styles from "../styles/Home.module.scss";
import CartContainer from "../containers/CartContainer";
import ProductsContainer from "../containers/ProductsContainer";
import { Button, Typography } from "antd";
import { initializeStore } from "../store";
import { receiveProducts } from "../actions";
import { getAll } from "../services/products";

const { Title } = Typography;

export default function Home() {
  return (
    <div>
      <Title className={styles.title}>Welcome to Macy's Bakery</Title>
      <div className={styles.description}>
        <a href="https://ide.geeksforgeeks.org/">
          <Button>About Us</Button>
        </a>
      </div>
      <div>
        <ProductsContainer />
        <CartContainer />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const products = await getAll();
  dispatch(receiveProducts(products));

  return { props: { initialReduxState: reduxStore.getState() } };
};
