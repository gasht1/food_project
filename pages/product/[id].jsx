import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/product.module.css"

const Product = () => {
  const [size, setsize] = useState(0)
  const pizza = {
    id: 1,
    img: "/image/pizza.png",
    name: "carowl",
    price: [60.7, 70.5, 90],
    desc: "this is the best pizza and delicious in ethiopia ",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image src={pizza.img} objectFit="contain" layout='fill' alt='' />
        </div>

      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}> {pizza.price[size]}BR</span>
        <p className={styles.desc}> {pizza.desc}  </p>
        <h3 className={styles.choose}> Coose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setsize(0)}>
            <Image src="/image/size.png" layout='fill' alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setsize(1)}>
            <Image src="/image/size.png" layout='fill' alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setsize(2)}>
            <Image src="/image/size.png" layout='fill' alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3>Choose Additional Ingredient</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox"
              id="double"
              name="double"
              styles={styles.checkbox}
            />
            <label htmlFor="double"> Double iIngredient</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox"
              id="cheese"
              name="cheese"
              styles={styles.checkbox}
            />
            <label htmlFor="cheese"> Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox"
              id="spicy"
              name="spicy"
              styles={styles.checkbox}
            />
            <label htmlFor="spicy"> Spice Sauce</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox"
              id="Garlic"
              name="Garlic"
              styles={styles.chekbox}
            />
            <label htmlFor="Garlic"> Garlic Sauce</label>
          </div>

        </div>


        <div className={styles.Add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart </button>
        </div>
      </div>

    </div>
  )
}

export default Product