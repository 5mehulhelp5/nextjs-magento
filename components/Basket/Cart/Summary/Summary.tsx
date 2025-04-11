'use client'
import { useAppSelector } from '@/redux/hooks'
import styles from './summary.module.scss'
import ButtonLink from '@/components/Ui/Links/ButtonLink/ButtonLink'

const Summary=()=>{
    
    const prices = useAppSelector(state=>state.shoppingCart.prices)
    return <div className={styles.container}>
        <h2>PODSUMOWANIE</h2>
        <div className={styles.details}>
        <div className={styles.rowBox}>
            <span>Cena produktów</span>
            <span>{prices.grand_total.value} {prices.grand_total.currency}</span>
        </div>
        <div className={styles.rowBox}>
            <span>Dostawa</span>
            <span>-</span>
        </div>
        <div className={styles.rowBox}>
            <span><b>Łączna kwota</b></span>
            <span><b>{prices.grand_total.value} {prices.grand_total.currency}</b></span>
        </div>

        </div>
       
        <ButtonLink title='Przejdź do kasy' url='/cart/checkout'/>
    </div>
}

export default Summary