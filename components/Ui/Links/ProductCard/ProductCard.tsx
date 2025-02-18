'use client';
import Link from 'next/link';
import styles from './productCard.module.scss';

export interface ProductCardPropsType {
  img: string;
  title: string;
  currency: string;
  price: number;
  sku: string;
  category: {
    name: string;
    uid: string;
  };
}

const ProductCard = ({
  img,
  title,
  currency,
  price,
  sku,
  category,
}: ProductCardPropsType) => {
  console.log(category);
  const url = `/produkty/${category.name}/${sku}`;
  console.log(url, title);
  return (
    <Link href={url} className={styles.link}>
      <img src={img} />
      <h3 className={styles.name}> {title}</h3>
      <span className={styles.price}>
        {price} {currency}
      </span>
    </Link>
  );
};

export default ProductCard;
