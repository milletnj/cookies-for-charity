import React from "react";
import PropTypes from "prop-types";
import Image from 'next/image'
import style from '../styles/Cart.module.scss'

const CartProduct = ({ product, removeProduct, changeProductQuantity }) => {
    const onIncrease = () => {
        product.quantity = product.quantity + 1;
        changeProductQuantity(product);
    }

    const onDecrease = () => {
        product.quantity = product.quantity - 1;
        changeProductQuantity(product);
    }

    return (
        <div className={style["shelf-item"]}>
            <div
                className={style["shelf-item__del"]}
                onClick={() => removeProduct(product)}
            />
            <div className={style["shelf-item__thumb"]}>
                <Image src={product.image} alt={`Preview of ${product.title}`} width="75px" height="75px" />
            </div>
            <div className={style["shelf-item__details"]}>
                <p className={style["title"]}>{product.title}</p>
                <p className={style["desc"]}>
                    {product.description} <br />
            Quantity: {product.quantity}
                </p>
            </div>
            <div className={style["shelf-item__price"]}>
                <p>&#36;{product.price}</p>
                <div>
                    <button onClick={onIncrease} disabled={product.quantity === 1 ? true : false} className={style["change-product-button"]}>-</button>
                    <button onClick={onDecrease} className={style["change-product-button"]}>+</button>
                </div>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
    removeProduct: PropTypes.func.isRequired,
    changeProductQuantity: PropTypes.func.isRequired,
};

export default CartProduct;