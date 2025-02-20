'use client';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import styles from './cartMenu.module.scss';
import CloseButton from '@/components/Ui/Buttons/CloseButton/CloseButton';
import {hideCartMenu} from '@/redux/shopping-card-slice';
import ProductCartMenu from './ProductCartMenu/ProductCartMenu';
const CartMenu = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.shoppingCard.showCartMenu);
  const cartMenuProducts = useAppSelector(
    (state) => state.shoppingCard.cartProducts
  );
  const hideCartMenuHandler = () => {
    dispatch(hideCartMenu());
  };
  if (!show) return null;

  return (
    <div className={styles.container}>
      <CloseButton color="grey" onClick={hideCartMenuHandler} />
      {cartMenuProducts.map((product, index) => (
        <ProductCartMenu
          key={index}
          variant={product.variant}
          name={product.name}
        />
      ))}
    </div>
  );
};
export default CartMenu;
