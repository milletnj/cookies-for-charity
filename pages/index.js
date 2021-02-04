import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CartContainer from '../containers/CartContainer'
import ProductsContainer from '../containers/ProductsContainer'
import { Button, Typography, Layout } from 'antd'

const { Title } = Typography;
const { Content } = Layout;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookies for Charity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout style={{height:"100vh"}}>
        <Layout className={styles['site-layout']}>
          <Content
            className={styles['site-layout-background']}>
            <main className={styles.main}>
              <Title className={styles.title}>
                Welcome to Macy's Bakery
              </Title>
              <div className={styles.description}>
                <a href='https://ide.geeksforgeeks.org/'>
                  <Button>
                    About Us
                  </Button>
                </a>
              </div>
              <div>
                <ProductsContainer />
                <CartContainer />
              </div>
            </main>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
