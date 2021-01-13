import React, { useState } from "react";
import PropTypes from "prop-types";
import style from '../styles/Cart.module.scss'
import Product from './Product'

const Cart = ({ products, total, onCheckoutClicked }) => {
  const [isOpen, setIsOpen] = useState(false);
  let classes = [style['float-cart']];

  if (isOpen) {
    classes.push(style['float-cart--open'])
  }

  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div key={product.id} className={style["shelf-item"]}>
        <Product
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image} />
        </div>
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div className={classes.join(' ')}>
      {/* If cart open, show close (x) button */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={style["float-cart__close-btn"]}>
          X
        </div>
      )}

      {/* If cart is closed, show bag with quantity of product and open cart action */}
      {!isOpen && (
        <span
          onClick={() => setIsOpen(!isOpen)}
          className={style["bag"] + " " + style["bag--float-cart-closed"]}>
          <span className={style["bag__quantity"]}>{products.length}</span>
        </span>
      )}

      <div className={style["float-cart__content"]}>
        <div className={style["float-cart__header"]}>
          {/* <span className="bag">
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span> */}
          <span className={style["header-title"]}>Cart</span>
        </div>

        <div className={style["float-cart__shelf-container"]}>
          {nodes}
        </div>

        <div className={style["float-cart__footer"]}>
          <div className={style["sub"]}>SUBTOTAL</div>
          <div className={style["sub-price"]}>
            <p className={style["sub-price__val"]}>
                &#36;{total}
            </p>
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
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart;
