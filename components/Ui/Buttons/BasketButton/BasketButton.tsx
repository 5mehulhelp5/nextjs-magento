'use client';
import {useAppDispatch} from '@/redux/hooks';
import styles from './basketButton.module.scss';
import BasketIcon from '@/public/assets/icons/basket.svg';
import {showCartMenu} from '@/redux/shopping-card-slice';
const BasketButton = () => {
  const dispatch = useAppDispatch();
  const showCartMenuHandler = () => {
    dispatch(showCartMenu());
  };
  return (
    <button className={styles.button} onClick={showCartMenuHandler}>
      <img src={BasketIcon.src} />
    </button>
  );
};

export default BasketButton;
