import React from 'react'
import styles from "../styles/Add.module.css"

const AddButton = ( { setClose } ) => {
  return (
    <div onClick = {() => setClose(false)} className={styles.mainAddButton} >
        add new pizza
    </div>
  )
}

export default AddButton