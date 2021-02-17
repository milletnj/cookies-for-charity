import React from "react";
import styles from "../styles/Home.module.scss";
import CartContainer from "../containers/CartContainer";
import ProductsContainer from "../containers/ProductsContainer";
import { Button, Typography } from "antd";

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
