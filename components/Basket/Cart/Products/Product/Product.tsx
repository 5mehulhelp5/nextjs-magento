'use client'
import { ProductCartMenuPropsType } from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu'
import styles from './product.module.scss'
import { CartItem } from '@/app/api/cart/addProductToCart/route';
import Link from 'next/link';

interface ProductPropsType extends CartItem {
  link: string;
}

const Product=({link,id,quantity,uid,product}:ProductPropsType)=>{
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

    return <div className={styles.product}>
        <div className={styles.leftBox}>
            <img src={img}/>
            <div className={styles.details}>
                <div className={styles.topBox}>
                <Link href={link}> <h3>{title}</h3></Link>
                <span>{attrribute.label}: {attrribute.value}</span> 
                </div>
           
              <div className={styles.buttonsBox}>
                <button className={styles.button}>-</button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={styles.button}>+</button>
              </div>
            </div>
        </div>
    </div>
}

export default Product