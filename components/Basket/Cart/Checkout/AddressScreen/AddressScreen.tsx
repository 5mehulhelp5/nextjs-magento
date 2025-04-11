'use client'
import styles from './addressScreen.module.scss'
import FormBillingAddress from './FormBillingAddress/FormBillingAddress'

const AddressScreen = () =>{

    return <div className={styles.container}>
        <FormBillingAddress/>
    </div>
}

export default AddressScreen