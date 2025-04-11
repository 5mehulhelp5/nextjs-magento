'use client'
import { useAppSelector } from '@/redux/hooks'
import styles from './products.module.scss'
import Product from './Product/Product'
import { useEffect } from 'react'

const Products =()=>{
const cartProducts = useAppSelector(state=>state.shoppingCart.cartProducts)
const cartId = useAppSelector((state) => state.shoppingCart.cartId);

useEffect(() => {
    
  }, [cartId, cartProducts]);

  if(cartId&&cartProducts.length>0){
    return <div className={styles.container}>
    <h2>TWÓJ KOSZYK</h2>
    {cartProducts.map((product,index)=><Product cartId={cartId} key={index} {...product}/>)}
        </div>
  }
   return <div className={styles.container}>
    <h2>TWÓJ KOSZYK JEST PUSTY</h2> </div>
}
export default Products