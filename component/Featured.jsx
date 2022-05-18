import React from "react";
import Image from "next/image";
import styles from "../styles/featured.module.css"

const Featured = () => {
  const images=[
    "/image/featured.png",
    "/image/featured1.png",
    "/image/featured2.png",

  ]
  return (
    <div className={styles.container}>
       <Image src="/image/arrowl.png" alt="" layout='fill' />
      <div className={styles.wrapper}>
        <div className={styles.Imagecontainer}>
       {images.map((image,i) =>(
         <Image src="/image/featured.png" key={i} alt="" layout='fill' />
       ))}
          
        </div>
       <Image src="/image/arrowr.png" alt="" layout='fill' />

      </div>
      
    </div>
  );
};
export default Featured;
