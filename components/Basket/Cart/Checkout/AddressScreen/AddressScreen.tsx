'use client'
import { useState } from 'react'
import styles from './addressScreen.module.scss'
import FormBillingAddress from './FormBillingAddress/FormBillingAddress'
import FormDeliveryAddress from './FormDeliveryAddress/FormDeliveryAddress'

const AddressScreen = () =>{

const [deliveryAddressSameAsBilling,setDeliveryAddressSameAsBilling] = useState(true)

const deliveryAddressSameAsBillingHandler = (deliveryAddressSameAsBilling:boolean)=>{
    setDeliveryAddressSameAsBilling(!deliveryAddressSameAsBilling)
    console.log(deliveryAddressSameAsBilling)
}
const deliveryAddressDiffAsBillingHandler = ()=>{
    setDeliveryAddressSameAsBilling(false)
}
    return <div className={styles.container}>
        <FormBillingAddress deliveryAddressSameAsBilling={deliveryAddressSameAsBilling} onDeliveryAddressSameAsBilling={deliveryAddressSameAsBillingHandler} onDeliveryAddressDiffAsBilling={deliveryAddressDiffAsBillingHandler}/>
        <FormDeliveryAddress/>
    </div>
}

export default AddressScreen