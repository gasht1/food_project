
import Image from "next/image";
import styles from "../styles/Cart.module.css"
const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extra</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>


                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>
                            <div className={styles.imagecontainer}>
                                <Image src="/image/pizza.png"
                                    layout='fill'
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Ethiopizza</span>
                        </td>
                        <td className={styles.Extra}>
                            <span>Doble ingredient,spicy sauce </span>
                        </td>
                        <td className={styles.price}>
                            <span>75BR </span>
                        </td>
                        <td className={styles.Quantity}>
                            <span>2 </span>
                        </td>
                        <td className={styles.Total}>
                            <span>150BR </span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>
                            <div className={styles.imagecontainer}>
                                <Image src="/image/pizza.png"
                                    layout='fill'
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Ethiopizza</span>
                        </td>
                        <td className={styles.Extra}>
                            <span>Doble ingredient,spicy sauce </span>
                        </td>
                        <td className={styles.price}>
                            <span>75BR </span>
                        </td>
                        <td className={styles.Quantity}>
                            <span>2 </span>
                        </td>
                        <td className={styles.Total}>
                            <span>150BR </span>
                        </td>
                    </tr>




                </table>
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
                    <button className={styles.button}>CHECKOUT NOW</button>
                </div>
            </div>

        </div>
    )
}

export default Cart