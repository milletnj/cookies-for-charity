import React from "react";
import Meta from "./Meta";
import { Layout } from "antd";
import PropTypes from "prop-types";
import styles from "../styles/Layout.module.scss";

const { Content } = Layout;

const SiteLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <Layout className={styles["site-layout"]}>
        <Content className={styles["site-layout-background"]}>
          <main className={styles.main}>{children}</main>
        </Content>
      </Layout>
    </>
  );
};

SiteLayout.propTypes = {
  children: PropTypes.node,
};

export default SiteLayout;
