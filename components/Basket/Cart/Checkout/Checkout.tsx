'use client';
import {useState} from 'react';
import AddressScreen from './AddressScreen/AddressScreen';
import styles from './checkout.module.scss';
import DeliveryScreen from './DeliveryScreen/DeliveryScreen';
import { useAppSelector } from '@/redux/hooks';
import PaymentScreen from './PaymentScreen/PaymentScreen';

const Checkout = () => {
  const cart_id = useAppSelector(state=>state.shoppingCart.cartId)
  const selectedDeliveryMethodStore = useAppSelector(state=>state.shoppingCart.selectedDeliveryMethod)
  const [screens, setScreens] = useState({
    addressScreen: {
      show: true,
    },
    deliveryScreen: {
      show: false,
    },
    paymentScreen:{
      show:false
    }
  });
const deliveryFirstname = useAppSelector(
    (state) => state.shoppingCart.deliveryAddress.firstname
  );
  const billingFirstname = useAppSelector(
    (state) => state.shoppingCart.billingAddress.firstname
  );
const showAddressScreenHandler = () =>{
  setScreens((prevState) => ({
    ...prevState,
    addressScreen: {
      ...prevState.addressScreen,
      show: true,
    },
    deliveryScreen: {
      ...prevState.deliveryScreen,
      show: false,
    },
    paymentScreen: {
      ...prevState.paymentScreen,
      show: false,
    },
  }));
}

const showDeliveryScreenHandler = () =>{
  if (deliveryFirstname !== '' && billingFirstname !== '') {
  setScreens((prevState) => ({
    ...prevState,
    addressScreen: {
      ...prevState.addressScreen,
      show: false,
    },
    deliveryScreen: {
      ...prevState.deliveryScreen,
      show: true,
    },
    paymentScreen: {
      ...prevState.paymentScreen,
      show: false,
    },
  }));
}
}

const showPaymentScreenHandler = ()=>{
  if(selectedDeliveryMethodStore!==null){
    setScreens((prevState) => ({
      ...prevState,
      addressScreen: {
        ...prevState.addressScreen,
        show: false,
      },
      deliveryScreen: {
        ...prevState.deliveryScreen,
        show: false,
      },
      paymentScreen: {
        ...prevState.paymentScreen,
        show: true,
      },
    }));
  }
}

const addressStyles = screens.addressScreen.show?`${styles.box} ${styles.active}`:styles.box
const deliveryStyles = screens.deliveryScreen.show?`${styles.box} ${styles.active}`:styles.box
if(cart_id){
  return (
    <div className={styles.container}>
      <div className={styles.checkoutProgressBox}>
        <div className={addressStyles} onClick={showAddressScreenHandler}>
          Dane adresowe
        </div>
        <div className={deliveryStyles} onClick={showDeliveryScreenHandler}>
          Opcje dostawy
        </div>
        <div className={styles.box} onClick={showPaymentScreenHandler}>
          Płatność
        </div>
        <div className={styles.box}>
          Podsumowanie
        </div>
      </div>
      <div className={styles.screenContainer}>
        {screens.addressScreen.show && (
          <AddressScreen onComplete={showDeliveryScreenHandler} />
        )}
        {screens.deliveryScreen.show && <DeliveryScreen onComplete={showPaymentScreenHandler}/>}
        {screens.paymentScreen.show&&<PaymentScreen/>}
      </div>
    </div>
  );
}
 return null 
};

export default Checkout;
