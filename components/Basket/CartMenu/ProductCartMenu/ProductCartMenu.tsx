'use client';
import Link from 'next/link';
import styles from './productCartMenu.module.scss';
import {VariantType} from '@/graphQl/queries/products/getProductDetails';
import PlusMinusButton from '@/components/Ui/Buttons/PlusMinusButton/PlusMinusButton';
import { updateProductQuantity } from '@/components/Api/Cart/cart';
import { CartItem } from '@/app/api/cart/addProductToCart/route';
import { useAppDispatch } from '@/redux/hooks';
import { updateCartProductQuantity } from '@/redux/shopping-cart-slice';


export interface ProductCartMenuPropsType extends CartItem {
  link:string;
}
interface ProductCartMenuExtendedPropsType extends ProductCartMenuPropsType{
  cartId:string
}
const ProductCartMenu = (product: ProductCartMenuExtendedPropsType) => {
  const dispatch = useAppDispatch()

  const cart_id = product.cartId
  const cart_item_uid = product.uid
  const title = product.product.name
  const price = product.product.price_range.minimum_price.final_price.value
  const currency = product.product.price_range.minimum_price.final_price.currency
  const amount = product.quantity;
  const img = product.product.image.url
  const link = product.link;
  const quantity = product.quantity
  const [beforeHash, afterHash] = product.product.sku.split('#');
  const afterHashSplit = afterHash.split("-")
  const attrribute = {
    label:afterHashSplit[0],
    value:afterHashSplit[1]
  }
  console.log(product.cartId)

const increaseQuantityHaandler = async() =>{
  const newQuantity = quantity+1
const apiResponse:ProductCartMenuPropsType[] =await updateProductQuantity(cart_id,cart_item_uid,newQuantity)
if(!apiResponse)return;
dispatch(updateCartProductQuantity({array:apiResponse}))
}
const decreaseQuantityHaandler = async() =>{
  const newQuantity = quantity-1
const apiResponse:ProductCartMenuPropsType[] =await updateProductQuantity(cart_id,cart_item_uid,newQuantity)
if(!apiResponse)return;
dispatch(updateCartProductQuantity({array:apiResponse}))
}
  return (
    <div className={styles.container}>
      
      <img className={styles.image} src={img} />
      <div className={styles.detailsBox}>
      <Link href={link}>{title}</Link>
      <span>Ilość: {amount}</span>
      <span>{price} {currency}</span>
      <span >{attrribute.label}: {attrribute.value}</span>
      <div className={styles.buttonsBox}>
      <PlusMinusButton onClick={decreaseQuantityHaandler} value="-"/>
      <PlusMinusButton onClick={increaseQuantityHaandler} value="+"/>
      </div>
      
      </div>
     
    </div>
  );
};

export default ProductCartMenu;
