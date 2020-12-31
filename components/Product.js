import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '../styles/Product.module.css'

const Product = ({ price, title, description, image }) => (
    <div>
        <Image src={image} alt={`Preview of ${title}`} className={styles.img} width="300px" height="300px" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>${price}</p>
    </div>
)

Product.propTypes = {
    price: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

export default Product
