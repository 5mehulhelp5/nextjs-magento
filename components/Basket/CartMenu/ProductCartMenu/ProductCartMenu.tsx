'use client';
import Link from 'next/link';
import styles from './productCartMenu.module.scss';
import {VariantType} from '@/graphQl/queries/products/getProductDetails';

export interface ProductCartMenuPropsType {
  link:string;
  id: string;
  quantity: number;
  product: {
    name: string;
    sku: string;
    image: {
      url: string;
    };
    price_range: {
      minimum_price: {
        final_price: {
          value: number;
          currency: string;
        };
      };
    };
  };
}

const ProductCartMenu = (product: ProductCartMenuPropsType) => {
  const title = product.product.name
  const price = product.product.price_range.minimum_price.final_price.value
  const currency = product.product.price_range.minimum_price.final_price.currency
  const amount = product.quantity;
  const img = product.product.image.url
  const link = product.link
  const [beforeHash, afterHash] = product.product.sku.split('#');
  const afterHashSplit = afterHash.split("-")
  const attrribute = {
    label:afterHashSplit[0],
    value:afterHashSplit[1]
  }
  console.log(afterHash.split("-"))

  return (
    <div className={styles.container}>
      
      <img className={styles.image} src={img} />
      <div className={styles.detailsBox}>
      <Link href={link}>{title}</Link>
      <span>Ilość: {amount}</span>
      <span>{price} {currency}</span>
      <span >{attrribute.label}: {attrribute.value}</span>
      </div>
     
    </div>
  );
};

export default ProductCartMenu;
