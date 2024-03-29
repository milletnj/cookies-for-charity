import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout, removeFromCart, changeProductQuantity } from "../actions";
import Cart from "../components/Cart";
import { getCartProducts, getTotal } from "../selectors/CartSelectors";

const CartContainer = ({
  products,
  total,
  checkout,
  removeFromCart,
  changeProductQuantity,
}) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    removeFromCart={removeFromCart}
    changeProductQuantity={changeProductQuantity}
  />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  changeProductQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(mapStateToProps, {
  checkout,
  removeFromCart,
  changeProductQuantity,
})(CartContainer);
