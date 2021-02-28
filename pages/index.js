import React from "react";
import styles from "../styles/Home.module.scss";
import CartContainer from "../containers/CartContainer";
import ProductsContainer from "../containers/ProductsContainer";
import { Button, Typography } from "antd";
import { initializeStore } from "../store";
import { getAllProducts } from "../actions";

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

export function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch(getAllProducts());

  return { props: { initialReduxState: reduxStore.getState() } };
}
