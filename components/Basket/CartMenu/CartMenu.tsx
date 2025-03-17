'use client';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import styles from './cartMenu.module.scss';
import CloseButton from '@/components/Ui/Buttons/CloseButton/CloseButton';
import {hideCartMenu, setCartId} from '@/redux/shopping-cart-slice';
import ProductCartMenu from './ProductCartMenu/ProductCartMenu';
import { useEffect, useState } from 'react';
import { CREATE_CART_QUERY_RESPONSE_TYPE } from '@/graphQl/queries/cart/createCart';
const CartMenu = () => {

  const dispatch = useAppDispatch();

    const cartMenuProducts = useAppSelector(
      (state) => state.shoppingCart.cartProducts
    );
    const show = useAppSelector((state) => state.shoppingCart.showCartMenu);
const cartId = useAppSelector(state=>state.shoppingCart.cartId)
const cartProducts = useAppSelector(state=>state.shoppingCart.cartProducts) 
    const hideCartMenuHandler = () => {
      dispatch(hideCartMenu());
    };
  useEffect(()=>{

    const createCart = async()=>{
      const response = await fetch("/api/createCart", {
        method: "POST",
      });
      const data= await response.json();
      dispatch(setCartId(data.createGuestCart.cart.id))
    }
    
    
    if(cartId===null){
    createCart()

    }
   
    
  },[cartId,cartProducts])

  if(!show)return null;
    return (
      <div className={styles.container}>
        <CloseButton color="grey" onClick={hideCartMenuHandler} />
        {cartMenuProducts.map((product, index) => (
          <ProductCartMenu
            key={index}
            {...product}
          />
        ))}
      </div>
    );
  };
  
  
export default CartMenu;
