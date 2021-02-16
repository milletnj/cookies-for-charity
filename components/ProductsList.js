import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Product.module.scss";

const ProductsList = ({ children }) => (
  <div>
    <div className={styles.grid}>{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
};

export default ProductsList;
