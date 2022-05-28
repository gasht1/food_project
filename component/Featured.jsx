import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/featured.module.css";

const Featured = () => {
  const [index, setindex] = useState(0)
  const images = [
    "/image/featured.png",
    "/image/featured1.png",
    "/image/featured3.png",
  ];
  const handleArrow = (direction) =>{
    if(direction==="l"){
      setindex(index!==0?index-1:2)}
      if(direction==="r"){
        setindex(index!==2?index+1:0)}
        
  }
  

  return (
    <div className={styles.containers}>
      <div className={styles.arrowContainer} style ={{left:0}} onClick ={()=>handleArrow("l")} >
      <Image src="/image/arrowl.png" alt="" layout="fill" />
      </div>
      
      <div className={styles.wrapper} style ={{transform:`translateX(${-100*index}vw)`}}>
        
          {images.map((image, i) => (
            <div className={styles.Imagecontainer} key={i}>
            <Image
              src={image}
              alt=""
              layout="fill"
              objectFit="contain"
              />
              
              </div>
          ))}
        
        
      </div>
      <div className={styles.arrowContainer} style ={{right:0}}>
      <Image src="/image/arrowr.png" alt="" layout="fill" onClick ={()=>handleArrow("r")}/>
      </div>
      
    </div>
  );
};
export default Featured;
