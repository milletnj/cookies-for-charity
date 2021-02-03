import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button, Card } from 'antd'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Card hoverable>
    <Product
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image} />
    <Button type={'primary'}
      onClick={onAddToCartClicked}>
      Add to Cart
    </Button>
  </Card>
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
