import React from "react";
import styles from "../styles/Home.module.scss";
import CartContainer from "../containers/CartContainer";
import ProductsContainer from "../containers/ProductsContainer";
import { Typography } from "antd";
import { initializeStore } from "../store";
import { receiveProducts } from "../actions";
import { getAll } from "../services/products";

const { Title } = Typography;

export default function Home() {
  return (
    <div style={{ alignItems: "center" }}>
      <Title className={styles.title}>Welcome to Macy's Bakery</Title>
      <div className={styles.description}>
        <p>
          100% of profits go to the Lily Orphan Care Centers (LOCC). The LOCC
          are a part of the Chinese Children Adoption International organization
          (CCAI). The Lily Orphan Care centers strive to improve care and living
          conditions in Chinese orphanages. This charity is import to me because
          the CCAI is the agency that I was adopted from. With your help, I hope
          to make a difference in these orphans' lives.
        </p>
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
