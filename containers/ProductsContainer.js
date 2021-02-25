import React from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { addToCart, getAllProducts } from "../actions";
import { getProducts } from "../selectors/ProductsSelectors";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import { Col } from "antd";

const ProductsContainer = ({ products, addToCart }) => {
  const dispatch = useDispatch();
  dispatch(getAllProducts());

  return (
    <ProductsList>
      {products.map((product) => (
        <Col key={product.id} style={{ margin: "10px" }}>
          <ProductItem
            product={product}
            onAddToCartClicked={() => addToCart(product)}
          />
        </Col>
      ))}
    </ProductsList>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export default connect(mapStateToProps, { addToCart })(ProductsContainer);
