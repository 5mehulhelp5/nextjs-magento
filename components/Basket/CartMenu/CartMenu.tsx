'use client';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import styles from './cartMenu.module.scss';
import CloseButton from '@/components/Ui/Buttons/CloseButton/CloseButton';
import {hideCartMenu, setCartId} from '@/redux/shopping-cart-slice';
import ProductCartMenu from './ProductCartMenu/ProductCartMenu';
import {useEffect, useState} from 'react';
import {CREATE_CART_QUERY_RESPONSE_TYPE} from '@/graphQl/queries/cart/createCart';
import {createCart} from '@/components/Api/Cart/cart';
const CartMenu = () => {
  const dispatch = useAppDispatch();

  const cartMenuProducts = useAppSelector(
    (state) => state.shoppingCart.cartProducts
  );
  const show = useAppSelector((state) => state.shoppingCart.showCartMenu);
  const cartId = useAppSelector((state) => state.shoppingCart.cartId);
  const cartProducts = useAppSelector(
    (state) => state.shoppingCart.cartProducts
  );
  const totalPrice = useAppSelector(state=>state.shoppingCart.prices)
  const hideCartMenuHandler = () => {
    dispatch(hideCartMenu());
  };

  const createCartHandler = async () => {
    const cartData = await createCart();
    dispatch(setCartId(cartData.createGuestCart.cart.id));
  };

  useEffect(() => {
    if (cartId === null) {
      createCartHandler();
    }
  }, [cartId, cartProducts]);

  if (!show) return null;
  if (!cartId) return null;
  return (
    <div className={styles.container}>
      <CloseButton color="grey" onClick={hideCartMenuHandler} />
      <div className={styles.productsBox}>
      {cartMenuProducts.map((productItem, index) => (
        <ProductCartMenu key={index} {...{...productItem, cartId: cartId}} />
      ))}
      </div>
      <div className={styles.sumBox}><span>Przewidywana suma</span><span>{totalPrice.grand_total.value} {totalPrice.grand_total.currency}</span></div>
    </div>
  );
};

export default CartMenu;
