import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from '../styles/Product.module.scss'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className={styles.card}>
    <Product
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image} />
    <button
      onClick={onAddToCartClicked}>
      Add to Cart
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
