import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Product.module.scss'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div className={styles.grid}>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
