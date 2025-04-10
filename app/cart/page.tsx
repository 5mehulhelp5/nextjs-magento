import Products from '@/components/Basket/Cart/Products/Products'
import styles from './cart.module.scss'
import Summary from '@/components/Basket/Cart/Summary/Summary'

const CartPage = () =>{
    return <div className={styles.container}>
        <Products/>
        <Summary/>
    </div>
}

export default CartPage