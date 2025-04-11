'use client'
import AddressScreen from './AddressScreen/AddressScreen'
import styles from './checkout.module.scss'

const Checkout = () =>{

    return <div className={styles.container}>
        <div className={styles.checkoutProgressBox}>CHECKOUT PROGRESS BOX</div>
        <div className={styles.screenContainer}><AddressScreen/></div>
        
    </div>
}

export default Checkout