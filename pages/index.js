import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CartContainer from '../containers/CartContainer'
import ProductsContainer from '../containers/ProductsContainer'
import { Button, Typography } from 'antd'

const { Title } = Typography;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookies for Charity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title className={styles.title}>
          Welcome to Macy's Bakery
        </Title>

        <p className={styles.description}>
        <a href='https://ide.geeksforgeeks.org/'> 
            <Button> 
              About Us
            </Button> 
          </a> 
        </p>

        <div className={styles.grid}>
          <ProductsContainer />
          <CartContainer />
        </div>
      </main>
    </div>
  )
}
