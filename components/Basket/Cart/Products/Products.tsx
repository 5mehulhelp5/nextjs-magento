'use client'
import { useAppSelector } from '@/redux/hooks'
import styles from './products.module.scss'
import Product from './Product/Product'

const Products =()=>{
const cartProducts = useAppSelector(state=>state.shoppingCart.cartProducts)

    return <div className={styles.container}>
<h2>TWÓJ KOSZYK</h2>
{cartProducts.map((product,index)=><Product key={index} {...product}/>)}
    </div>
}
export default Products