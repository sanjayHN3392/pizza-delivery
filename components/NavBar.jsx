import React from 'react'
import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src="/images/phone_call.png" alt="" width="30" height="20" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>Order Now</div>
            <div className={styles.text}>012 345 678</div>
          </div>
        </div>

        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}> Homepage</li>
            <li className={styles.listItem}> Products</li>
            <li className={styles.listItem}> Menu</li>
            <Image
              src="/images/phone_call.png"
              alt=""
              height="70"
              width="160"
            />
            <li className={styles.listItem}> Events</li>
            <li className={styles.listItem}> Blog</li>
            <li className={styles.listItem}> Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <Link href="/cart">
            <div className={styles.cart}>
              <Image
                src="/images/shopping-cart.png"
                alt=""
                width="30px"
                height="30px"
              />
              <div className={styles.counter}> 2</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
