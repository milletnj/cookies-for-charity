import React from "react";
import PropTypes from "prop-types";
import Image from 'next/image'
import style from '../styles/Cart.module.scss'

const CartProduct = ({ product, changeProductQuantity, onRemoveFromCart}) => {
    const onIncrease = () => {
        changeProductQuantity(product.id, product.quantity + 1);
    }

    const onDecrease = () => {
        changeProductQuantity(product.id, product.quantity - 1);
    }

    return (
        <div className={style["shelf-item"]}>
            <div
                className={style["shelf-item__del"]}
                onClick={onRemoveFromCart}
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
                    <button onClick={onDecrease} disabled={product.quantity === 1 ? true : false} className={style["change-product-button"]}>-</button>
                    <button onClick={onIncrease} className={style["change-product-button"]}>+</button>
                </div>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    changeProductQuantity: PropTypes.func.isRequired,
};

export default CartProduct;