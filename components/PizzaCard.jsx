import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/PizzaCard.module.css'
const PizzaCard = (props) => {
  let itemId = props.pizza.id
  return (
    <Link href={`/product/${itemId}`}>
      <div className={styles.pizzaCard}>
        <Image src={props.pizza.img} alt="" height="200" width="200" />
        <h1 className={styles.title}>{props.pizza.title}</h1>
        <div className={styles.price}>${props.pizza.price}</div>
        <p className={styles.description}>{props.pizza.description}</p>
      </div>
    </Link>
  )
}

export default PizzaCard
