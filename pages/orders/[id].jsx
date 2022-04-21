import Image from 'next/image'
import styles from '../../styles/Order.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Order = () => {
  const statusClass = (index) => {
    if (index === 0) return styles.done
    if (index === 1) return styles.inProgress
    if (index >= 2) return styles.unDone
  }
  const router = useRouter()
  const [order, setOrder] = useState({})

  useEffect(() => {
    const getOrderDetail = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/order/62093095c0a0ca41c4337635',
        )
        const data = response.data.order
        console.log(data)
        setOrder(data)
      } catch (err) {
        console.log(err)
      }
    }
    getOrderDetail()
  }, [])
  // console.log(router.query.id)
  return (
    <div>
      <p className={styles.textContainer}> Order placed Successfully</p>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.row}>
            <table className={styles.table}>
              <tr className={styles.tableRow}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <span className={styles.id}>{router.query.id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td>
                  <span className={styles.total}>${order.total}</span>
                </td>
              </tr>
            </table>
          </div>
          <div className={styles.row}>
            <div className={statusClass(0)}>
              <Image src="/images/paid.png" alt="" width={30} height={30} />
              <span>Payment</span>
              <div className={styles.checkedIcon}>
                <Image src="/images/status.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className={statusClass(1)}>
              <Image
                src="/images/cooking-time.png"
                alt=""
                width={30}
                height={30}
              />
              <span>Preparing</span>
              <div className={styles.checkedIcon}>
                <Image src="/images/status.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className={statusClass(2)}>
              <Image
                src="/images/fast-delivery.png"
                alt=""
                width={30}
                height={30}
              />
              <span>On the way</span>
              <div className={styles.checkedIcon}>
                <Image src="/images/status.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className={statusClass(3)}>
              <Image
                src="/images/delivered.png"
                alt=""
                width={30}
                height={30}
              />
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
                <Image src="/images/status.png" alt="" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextStyle}>SubTotal:</b>$
              {order.subTotal}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextStyle}>Discount:</b>$
              {order.disCount}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextStyle}>Total:</b>${order.total}
            </div>
            <button disabled className={styles.button}>
              PAID
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
