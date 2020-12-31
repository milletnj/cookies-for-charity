import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({ products, total, onCheckoutClicked }) => {

    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <div key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
        )
    ) : (
            <em>Please add products to the cart.</em>
        )

    return (
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
                disabled={hasProducts ? '' : 'disabled'}>
                Checkout
      </button>
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string,
    onCheckoutClicked: PropTypes.func
}

export default Cart
