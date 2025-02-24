'use client';
import Link from 'next/link';
import styles from './productCartMenu.module.scss';
import {VariantType} from '@/graphQl/queries/products/getProductDetails';

export interface ProductCartMenuPropsType {
  variant: VariantType;
  name: string;
  amount:number;
  link:string;
}

const ProductCartMenu = (product: ProductCartMenuPropsType) => {
  const price = product.variant.product.price_range.minimum_price.final_price.value
  const currency = product.variant.product.price_range.minimum_price.final_price.currency
  const amount = product.amount
  const link = product.link
  return (
    <div className={styles.container}>
      <img className={styles.image} src={product.variant.product.media_gallery[0].url} />
      <div className={styles.detailsBox}>
      <Link href={link}>{product.name}</Link>
      <span>Ilość: {amount}</span>
      <span>{price} {currency}</span>

      </div>
     
    </div>
  );
};

export default ProductCartMenu;
