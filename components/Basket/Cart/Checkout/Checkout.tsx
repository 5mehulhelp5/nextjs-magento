'use client';
import {useState} from 'react';
import AddressScreen from './AddressScreen/AddressScreen';
import styles from './checkout.module.scss';
import DeliveryScreen from './DeliveryScreen/DeliveryScreen';

const Checkout = () => {
  const [screens, setScreens] = useState({
    addressScreen: {
      show: true,
    },
    deliveryScreen: {
      show: false,
    },
  });

  const addressScreenCompletedHandler = () => {
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
    }));
  };
const addressStyles = screens.addressScreen.show?`${styles.box} ${styles.active}`:styles.box
const deliveryStyles = screens.deliveryScreen.show?`${styles.box} ${styles.active}`:styles.box
  return (
    <div className={styles.container}>
      <div className={styles.checkoutProgressBox}>
        <div className={addressStyles}>
          Dane adresowe
        </div>
        <div className={deliveryStyles}>
          Opcje dostawy
        </div>
        <div className={styles.box}>
          Płatność
        </div>
        <div className={styles.box}>
          Podsumowanie
        </div>
      </div>
      <div className={styles.screenContainer}>
        {screens.addressScreen.show && (
          <AddressScreen onComplete={addressScreenCompletedHandler} />
        )}
        {screens.deliveryScreen.show && <DeliveryScreen />}
      </div>
    </div>
  );
};

export default Checkout;
