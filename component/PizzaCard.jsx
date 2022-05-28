import React from 'react'
import  styles from "../styles/PizzaCard.module.css"
import Image from "next/image";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/image/pizza.png" width="500" height="500" className={styles.image}/>
        <h1 className={styles.title}> ethio_pizza</h1>
        <span className={styles.price}>90 birr</span>
        <p className={styles.dec}>
          this is the best hot pizza in ethiopia 
          </p>
    </div>
  )
}

export default PizzaCard