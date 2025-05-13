'use client'
import { useEffect } from 'react'
import styles from './paymentScreen.module.scss'
import { useAppSelector } from '@/redux/hooks'
import { getPaymentMethods } from '@/components/Api/Cart/checkout'

const PaymentScreen =()=>{
    const shoppingCartStore = useAppSelector(state=>state.shoppingCart)
    const cart_id = shoppingCartStore.cartId
    const getAvaiablePaymentMethods = async(cart_id:string)=>{
        const available_payment_methods = await getPaymentMethods({cart_id})
        return available_payment_methods
    }
useEffect(()=>{
    if(cart_id!==null){
       const paymentMethods = getPaymentMethods({cart_id})
        console.log(paymentMethods,'PAYMENT METHODS')
    }

},[shoppingCartStore])
    return <div className={styles.container}>PAYMENT SCREEN</div>
}

export default PaymentScreen