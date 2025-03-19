'use client';
import Link from 'next/link';
import styles from './productCartMenu.module.scss';
import {VariantType} from '@/graphQl/queries/products/getProductDetails';
import {updateProductQuantity} from '@/components/Api/Cart/cart';
import {CartItem} from '@/app/api/cart/addProductToCart/route';
import {useAppDispatch} from '@/redux/hooks';
import {updateCartProductQuantity} from '@/redux/shopping-cart-slice';
import {useState} from 'react';

export interface ProductCartMenuPropsType extends CartItem {
  link: string;
}
interface ProductCartMenuExtendedPropsType extends ProductCartMenuPropsType {
  cartId: string;
}
const ProductCartMenu = (product: ProductCartMenuExtendedPropsType) => {
  const dispatch = useAppDispatch();

  const [qtyError, setQtyError] = useState({status: false, message: ''});
  const cart_id = product.cartId;
  const cart_item_uid = product.uid;
  const title = product.product.name;
  const price = product.product.price_range.minimum_price.final_price.value;
  const currency =
    product.product.price_range.minimum_price.final_price.currency;
  const img = product.product.image.url;
  const link = product.link;
  const quantity = product.quantity;
  const [beforeHash, afterHash] = product.product.sku.split('#');
  const afterHashSplit = afterHash.split('-');
  const attrribute = {
    label: afterHashSplit[0],
    value: afterHashSplit[1],
  };

  const increaseQuantityHaandler = async () => {
    const newQuantity = quantity + 1;

    const apiResponse = await updateProductQuantity(
      cart_id,
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

  const decreaseQuantityHaandler = async () => {
    const newQuantity = quantity - 1;
    const apiResponse = await updateProductQuantity(
      cart_id,
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
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} />
      <div className={styles.detailsBox}>
        <Link href={link}>{title}</Link>
        <span>
          {price} {currency}
        </span>
        <span>
          {attrribute.label}: {attrribute.value}
        </span>
        <div className={styles.buttonsBox}>
          <button className={styles.button} onClick={decreaseQuantityHaandler}>
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.button} onClick={increaseQuantityHaandler}>
            +
          </button>
        </div>
        {qtyError.status && (
          <span className={styles.errorMessage}>{qtyError.message}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCartMenu;
