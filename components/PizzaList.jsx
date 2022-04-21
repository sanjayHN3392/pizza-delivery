import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import axios from 'axios'
const PizzaListComponent = () => {
  const [pizzaList, setPizzaProducts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          'http://localhost:5000/api/products/getProducts',
        )
        const data = await response.data.products
        setPizzaProducts(data)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    getProducts()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      {isLoading && <div> Loading... </div>}
      <div className={styles.wrapper}>
        {pizzaList.map((item) => {
          return <PizzaCard key={item.id} pizza={item} />
        })}
      </div>
    </div>
  )
}

export default PizzaListComponent
