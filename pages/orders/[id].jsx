import Image from "next/image";
import styles from "../../styles/order.module.css"

const order = () => {
    const status = 0;
    const statusclass=(index) =>{
        if(index - status < 1) return styles.done;
        if(index - status === 1) return styles.inprogress;

        if(index - status > 1) return styles.undone;

    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        
                        <th>Total</th>


                    </tr>
                    <tr className={styles.tr}>
                       
                        <td>
                            <span className={styles.id}>E172345</span>
                        </td>
                        <td className={styles.name}>
                            <span>abebe kebde </span>
                        </td>
                        <td className={styles.address}>
                            <span>arade nib bank </span>
                        </td>
                        
                        <td className={styles.Total}>
                            <span>150BR </span>
                        </td>
                    </tr>
                    

                </table>
            </div>
            <div className={styles.row}>
                <div className={statusclass(0)}>
                    <Image src="/image/paid.png" width={30} height={30} alt=""/>
                    <span>PAYMENT</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src = "/image/checked.png " width ={20} height ={20} alt=""/>
                </div>
                </div>
                <div className={statusclass(1)}>
                    <Image src="/image/bake.png" width={30} height={30} alt=""/>
                    <span>preparing</span>
                    <div className={styles.checkedIcon}>
                   <Image className={styles.checkedIcon} src = "/image/checked.png " width ={20} height ={20} alt=""/>
                </div>
                </div>
                <div className={statusclass(2)}>
                    <Image src="/image/bike.png" width={30} height={30} alt=""/>
                    <span>on the way</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src = "/image/checked.png " width ={20} height ={20} alt=""/>
                </div>
                </div>
                <div className={statusclass(3)}>
                    <Image src="/image/delivered.png" width={30} height={30} alt=""/>
                    <span>delivered</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src = "/image/checked.png " width ={20} height ={20} alt=""/>
                </div>
                </div>
                
            </div>

        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>70BR
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>0.0BR
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>70BR
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
        </div>

    </div>
  )
}

export default order