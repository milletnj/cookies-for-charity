import React from "react"
import PropTypes from "prop-types"
import Image from 'next/image'
import { Button } from 'antd'
import {
    CloseOutlined,
    PlusOutlined,
    MinusOutlined
  } from '@ant-design/icons'
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
            <div>
                <CloseOutlined type="close" className={style["shelf-item__del"]} onClick={onRemoveFromCart} />
            </div>
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
                    <Button onClick={onDecrease} disabled={product.quantity === 1 ? true : false} className={style["change-product-button"]} style={{marginRight: '5px'}} icon={<MinusOutlined />} />
                    <Button onClick={onIncrease} className={style["change-product-button"]} icon={<PlusOutlined />} />
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