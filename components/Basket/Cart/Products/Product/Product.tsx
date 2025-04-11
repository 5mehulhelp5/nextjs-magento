'use client'

import { updateProductQuantity } from '@/components/Api/Cart/cart';
import styles from './product.module.scss'
import { CartItem } from '@/app/api/cart/addProductToCart/route';
import DeleteButton from '@/components/Ui/Buttons/DeleteButton/DeleteButton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { updateCartProductQuantity } from '@/redux/shopping-cart-slice';

interface ProductPropsType extends CartItem {
  link: string;
  cartId:string;
}

const Product=({link,id,quantity,uid,product,cartId}:ProductPropsType)=>{

const dispatch = useAppDispatch();

const [qtyError, setQtyError] = useState({status: false, message: ''});

    const cart_item_uid = uid;
  const title = product.name;
  const price = product.price_range.minimum_price.final_price.value;
  const currency =
    product.price_range.minimum_price.final_price.currency;
  const img = product.image.url;
  const [beforeHash, afterHash] = product.sku.split('#');
  const afterHashSplit = afterHash.split('-');
  const attrribute = {
    label: afterHashSplit[0],
    value: afterHashSplit[1],
  };

const increaseQuantityHaandler = async () => {
    const newQuantity = quantity + 1;

    const apiResponse = await updateProductQuantity(
      cartId,
      cart_item_uid,
      newQuantity
    );
    if (!apiResponse) return;
    if (!apiResponse.error.status && apiResponse.data !== null) {
      dispatch(updateCartProductQuantity({cart_items: apiResponse.data.cart_items,prices:apiResponse.data.prices}));
    }
    if (apiResponse.error.status) {
      setQtyError({status: true, message: apiResponse.error.message});
      setTimeout(() => {
        setQtyError({status: false, message: ''});
      }, 3000);
    }
  };
  const decreaseQuantityHandler = async () => {
    const newQuantity = quantity - 1;
    const apiResponse = await updateProductQuantity(
      cartId,
      cart_item_uid,
      newQuantity
    );
    if (!apiResponse) return;
    if (!apiResponse.error.status && apiResponse.data !== null) {
      dispatch(updateCartProductQuantity({cart_items: apiResponse.data.cart_items,prices:apiResponse.data.prices}));
    }
    if (apiResponse.error.status) {
      setQtyError({status: true, message: apiResponse.error.message});
      setTimeout(() => {
        setQtyError({status: false, message: ''});
      }, 3000);
    }
  };
  const deleteProductHandler = async () => {
    const newQuantity = 0;
    const apiResponse = await updateProductQuantity(
      cartId,
      cart_item_uid,
      newQuantity
    );
    if (!apiResponse) return;
    if (!apiResponse.error.status && apiResponse.data !== null) {
      dispatch(updateCartProductQuantity({cart_items: apiResponse.data.cart_items,prices:apiResponse.data.prices}));
    }
    if (apiResponse.error.status) {
      setQtyError({status: true, message: apiResponse.error.message});
      setTimeout(() => {
        setQtyError({status: false, message: ''});
      }, 3000);
    }
  };
    return <div className={styles.product}>
        <div className={styles.leftBox}>
            <img src={img}/>
            <div className={styles.details}>
                <div className={styles.topBox}>
                <Link href={link}> <h3>{title}</h3></Link>
                {qtyError.status&&<span className={styles.errorMessage}>{qtyError.message}</span>}
                <span>{attrribute.label}: {attrribute.value}</span> 
                </div>
           
              <div className={styles.buttonsBox}>
                <button className={styles.button} onClick={decreaseQuantityHandler}>-</button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={styles.button} onClick={increaseQuantityHaandler}>+</button>
              </div>
            </div>
        </div>
        <div className={styles.rightBox}>
          <DeleteButton onClick={deleteProductHandler}/>
          <span>{price} {currency}</span>
        </div>
    </div>
}

export default Product