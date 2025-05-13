'use client';
import { useAppSelector } from '@/redux/hooks';
import styles from './deliveryScreen.module.scss';
import InputBox from './InputBox/InputBox';
import { useState } from 'react';
import { DeliveryMethodType } from '@/redux/shopping-cart-slice';

interface DeliveryScreenPropsType{
  onComplete:()=>void;
}

const DeliveryScreen = ({onComplete}:DeliveryScreenPropsType) => {
  const shoppingCart = useAppSelector(state=>state.shoppingCart)
  const priceTotal = shoppingCart.prices.grand_total.value
  const priceDelivery = shoppingCart.selectedDeliveryMethod? shoppingCart.selectedDeliveryMethod?.amount.value:0
  const priceProducts = priceTotal-priceDelivery
  const currency = shoppingCart.prices.grand_total.currency
  const selectedDeliveryMethodStore = shoppingCart.selectedDeliveryMethod
 const [selectedDelivery,setSelectedDelivery] = useState<null|DeliveryMethodType>(selectedDeliveryMethodStore)
const cart_id = useAppSelector(state=>state.shoppingCart.cartId)
 const onSelectHandler = (item:DeliveryMethodType)=>{
setSelectedDelivery(item)
 }
  const deliveryMethodsStore = useAppSelector(state=>state.shoppingCart.deliveryAddress.available_shipping_methods)
 
  if(!cart_id)return null
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
      <h2>Wybierz rodzaj dostawy</h2>
      <div className={styles.deliveryMethodsContainer}>
        {deliveryMethodsStore.map((item,index)=><InputBox cart_id={cart_id} selectedDelivery={selectedDelivery} onSelectHandler={()=>onSelectHandler(item)} data={item} key={index}/>
        )}
      </div>

      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rowBox}>
          <span>CENA PRODUKTÓW</span>
          <span>{priceProducts} {currency}</span>
        </div>
        <div className={styles.rowBox}>
          <span>DOSTAWA</span>
          <span>{priceDelivery} {currency}</span>
        </div>
        <div className={styles.rowBox}>
          <span>ŁĄCZNA KWOTA</span>
          <span><b>{priceTotal} {currency}</b></span>
        </div>
        <button className={styles.button} disabled={selectedDelivery?false:true} onClick={onComplete}>PRZEJDŹ DO PŁATNOŚCI</button>
      </div>
      
    
    </div>
  );
};

export default DeliveryScreen;
