import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div  className={styles.container}>
        <h1  className={styles.title}>the best pizza in town</h1>
        <p  className={styles.desc}>
        Pizza is a type of food that was created in Italy.
         It is made by putting "Toppings" 
         (such as cheese, sausages, pepperoni, vegetables, tomatoes,spices and herbs) 
          over a piece of bread covered with sauce;
           most often tomato,but sometimes butter-based sauces are used.
        </p>
        <div  className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            

        </div>

    </div>

  )
}

export default PizzaList