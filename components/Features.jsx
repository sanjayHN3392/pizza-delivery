import React, { useState } from 'react'
import styles from '../styles/Feature.module.css'
import Image from 'next/image'
const Features = () => {
  const [index, setIndex] = useState(0)
  const fetaureImages = [
    '/images/pizza_image.png',
    '/images/pizza2.png',
    '/images/pizza_image.png',
  ]

  const handleArrow = (direction) => {
    console.log(index)
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2)
    } else {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image src="/images/left_arrow.png" alt="" height="200" width="200" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={fetaureImages[index]}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image src="/images/right_arrow.png" alt="" height="100" width="100" />
      </div>
    </div>
  )
}

export default Features
