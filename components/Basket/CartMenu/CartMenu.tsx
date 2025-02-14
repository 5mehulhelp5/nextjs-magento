'use client';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import styles from './cartMenu.module.scss';
import CloseButton from '@/components/Ui/Buttons/CloseButton/CloseButton';
import {hideCartMenu} from '@/redux/shopping-card-slice';
const CartMenu = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.shoppingCard.showCartMenu);

  const hideCartMenuHandler = () => {
    dispatch(hideCartMenu());
  };
  if (!show) return null;

  return (
    <div className={styles.container}>
      <CloseButton color="grey" onClick={hideCartMenuHandler} />
    </div>
  );
};
export default CartMenu;
