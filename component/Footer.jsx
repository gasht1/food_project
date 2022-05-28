import Image from 'next/image'
import React from 'react'
import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div className= {styles.container}>
      <div className={styles.item}>
        <Image src="/image/bg.png" layout='fill' alt =""/>
      </div>
      <div className={styles.item}>
      <div className={styles.card}>
      
        <h2 className={styles.hi}>
          oh yes,we did. the habesha pizza.
          well baked slice of pizza
        </h2>
      
      </div>
      <div className={styles.card}>
      
        <h1 className={styles.title}>
          FIND OUR RESTURANT</h1>
          <p className={styles.list}>
            Keble 18 around  marki
            <br />Gondar
            <br />+251946111937
          </p>
          <p className={styles.list}>
             Pissa
            <br />Gondar
            <br />+251942111937
          </p>
          <p className={styles.list}>
             Belko
            <br />Gondar
            <br />+251946111942
          </p>
          <p className={styles.list}>
            Arada
            <br />Gondar
            <br />+251946111939
          </p>
      
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}> WORKING HOURS</h1>
       <p className={styles.list} >
         MONDAY UNTIL FRIDAY
          <br /> 2:00am -1:30pm
       </p>
       <p className={styles.list} >
         SATURDAY AND SUNDAY
          <br /> 2:00am -8:00am
       </p>
      </div>

      </div> 

    </div>
  )
}

export default Footer