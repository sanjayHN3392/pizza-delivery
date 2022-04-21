import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/unsplashpng.png" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID, THE BEST IN TOWN, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTURANT</h1>
          <p className={styles.text}>
            1654,Don road, #444
            <br /> New York,560038
            <br /> 9686083392
          </p>
          <p className={styles.text}>
            1654,Don road, #444
            <br /> New York,560038
            <br /> 9686083392
          </p>
          <p className={styles.text}>
            1654,Don road, #444
            <br /> New York,560038
            <br /> 9686083392
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            1654,Don road, #444
            <br /> New York,560038
            <br /> 9686083392
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
