import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import CartItemCard from '../components/CartItemCard'
import styles from '../styles/Cart.module.css'
import Router from 'next/router'
import Link from 'next/link'

export default function Cart() {
  const [cart, setcartItems] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [subTotal, setSubTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [orderId, setOrderId] = useState('')

  const getGrandTotal = (data) => {
    let discount = 0
    let total = 0
    console.log(data)
    data.forEach((item) => {
      total = total + item.total
      if (item.discount != null) {
        discount = discount + item.discount
      }
      console.log('discount', discount)
    })
    setSubTotal(total)
    setDiscount(discount)
  }
  useState(() => {
    const getCartItems = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cart/getCartItems',
        )
        const data = await response.data.cartItems
        setcartItems(data)
        getGrandTotal(data)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }

    getCartItems()
  }, [])

  const placeOrder = async () => {
    let isApiCallSuccess = true
    const orderDetails = {
      customer: 'Jorge',
      address: '#202,4th cross,brigade road, Bangalore, 560089',
      status: 0,
      total: subTotal - discount,
      subTotal: subTotal,
      disCount: discount,
    }
    try {
      const res = await axios.post(
        'http://localhost:5000/api/order/addOrder',
        orderDetails,
      )
      console.log('id', res.data.order)
      setOrderId(res.data.order)
      console.log('orderiD', orderId)
      // ((isApiCallSuccess = true)),
      // console.log(res.data.order)
    } catch (err) {
      console.log(err)
      isApiCallSuccess = false
    }
    return isApiCallSuccess
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {isLoading
          ? 'Loading...'
          : cart.map((item) => {
              return (
                <div className={styles.cardBox} key={item.id}>
                  {console.log('idd', item.id)}
                  <img
                    src={item.img}
                    alt=""
                    className={styles.imageContainer}
                  />

                  <div className={styles.orderDetails}>
                    <p className={styles.textStyles}>{item.title}</p>
                    <p className={styles.textStyles}>Add ons: {item.extras}</p>
                    <p className={styles.textStyles}>price: {item.price}</p>
                    <p className={styles.textStyles}>
                      Quantity: {item.quantity}
                    </p>
                    <p className={styles.textStyles}>Total: {item.total}</p>
                  </div>
                </div>
              )
            })}
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextStyle}>SubTotal:</b>${subTotal}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextStyle}>Discount:</b>${discount}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextStyle}>Total:</b>$
            {subTotal - discount}
          </div>
          <Link href={'/orders/62093095c0a0ca41c4337635'}>
            <button
              className={styles.button}
              onClick={() => {
                // let isDone =
                placeOrder()
                // if (isDone) {
                //   Router.push(`/orders/${orderId}`)
                // }
              }}
            >
              ORDER NOW!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
