import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/ProductPage.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Product = () => {
  const [pizzaSize, setSize] = useState(100)
  const [quantity, setQuantity] = useState(1)
  const [extras, setExtras] = useState('')
  const [product, setproductData] = useState({})
  const router = useRouter()
  const [isLoading, setLoading] = useState(true)

  const showCartToast = () => {
    toast.success('successfully added to cart', {
      position: toast.POSITION.BOTTOM_CENTER,
    })
  }
  useEffect(() => {
    const getProductById = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${router.query.id}`,
        )
        const data = await response.data.product
        setproductData(data)
        setSize(data.price)
      } catch (err) {}
      setLoading(false)
    }
    getProductById()
  }, [])

  const addProductTocart = async () => {
    const cartData = {
      title: product.title,
      img: product.img,
      price: product.price,
      total: product.price * quantity,
      quantity: quantity,
      extras: extras,
    }
    console.log('cartData', cartData)
    try {
      const res = await axios.post(
        'http://localhost:5000/api/cart/addtocart',
        cartData,
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleSize = (e) => {
    if (e.target.value === 'Small') {
      setSize(100)
    } else if (e.target.value === 'Medium') {
      setSize(180)
    } else {
      setSize(270)
    }
  }

  const getExtras = (e) => {
    setExtras(e.target.value)
  }

  const getQuantity = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          {!isLoading && (
            <Image src={product.img} alt="" height="200" width="200" />
          )}
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        {!isLoading && <h3 className={styles.price}>${pizzaSize}</h3>}
        <p className={styles.desc}>{product.description}</p>
        <h2 className={styles.choose}>Choose your size</h2>
        <div className={styles.dropDownContainer}>
          <select
            className={styles.sizes}
            onClick={(e) => {
              handleSize(e)
            }}
          >
            <option value="Small" className={styles.values}>
              Small
            </option>
            <option value="Medium" className={styles.values}>
              Medium
            </option>
            <option value="Large" className={styles.values}>
              Large
            </option>
          </select>
        </div>
        <h2 className={styles.choose}>Add Extras</h2>
        {/* <h3 className={extrasText}>Add extras</h3> */}
        <div className={styles.dropDownContainer2}>
          <select
            className={styles.extraSize}
            onClick={(e) => {
              getExtras(e)
            }}
          >
            <option value="double Ingredients" className={styles.values}>
              double Ingredients
            </option>
            <option value="spicy sause" className={styles.values}>
              spicy sause
            </option>
            <option value="extra cheess" className={styles.values}>
              extra cheess
            </option>
          </select>
        </div>
        <div className={styles.pizzaCount}>
          <input
            className={styles.inputField}
            onChange={(e) => {
              getQuantity(e)
            }}
            type="number"
            defaultValue={1}
          />
          <button
            className={styles.submitButton}
            onClick={() => {
              addProductTocart()
              showCartToast()
            }}
            type="button"
          >
            Add to cart
          </button>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  )
}

export default Product
