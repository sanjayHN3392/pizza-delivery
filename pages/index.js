import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Features'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant in Bangalore</title>
        <meta name="description" content="Best in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Features/>
     <PizzaList/>

    
    </div>
  )
}
