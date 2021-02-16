import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "../styles/Cart.module.scss";
import CartProduct from "./CartProduct";

const Cart = ({
  products,
  total,
  onCheckoutClicked,
  removeFromCart,
  changeProductQuantity,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  let classes = [style["float-cart"]];

  if (isOpen) {
    classes.push(style["float-cart--open"]);
  }

  const cartTotal = products.reduce((a, b) => a + (b["quantity"] || 0), 0);

  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => (
      <CartProduct
        product={product}
        onRemoveFromCart={() => removeFromCart(product.id)}
        changeProductQuantity={changeProductQuantity}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div className={classes.join(" ")}>
      {/* If cart open, show close (x) button */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={style["float-cart__close-btn"]}
        >
          X
        </div>
      )}

      {/* If cart is closed, show bag with quantity of product and open cart action */}
      {!isOpen && (
        <span
          onClick={() => setIsOpen(!isOpen)}
          className={style["bag"] + " " + style["bag--float-cart-closed"]}
        >
          <span className={style["bag__quantity"]}>{cartTotal}</span>
        </span>
      )}

      <div className={style["float-cart__content"]}>
        <div className={style["float-cart__header"]}>
          <span className={style["bag"]}>
            <span className={style["bag__quantity"]}>{cartTotal}</span>
          </span>
          <span className={style["header-title"]}>Cart</span>
        </div>

        <div className={style["float-cart__shelf-container"]}>{nodes}</div>

        <div className={style["float-cart__footer"]}>
          <div className={style["sub"]}>SUBTOTAL</div>
          <div className={style["sub-price"]}>
            <p className={style["sub-price__val"]}>&#36;{total}</p>
          </div>
          <div onClick={onCheckoutClicked} className={style["buy-btn"]}>
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.string.isRequired,
  onCheckoutClicked: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  changeProductQuantity: PropTypes.func.isRequired,
};

export default Cart;
