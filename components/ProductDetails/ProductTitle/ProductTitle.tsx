'use client';
import {useAppSelector} from '@/redux/hooks';
import styles from './productTitle.module.scss';

const ProductTitle = () => {
  const title = useAppSelector(
    (state) => state.productDetails.productToDisplay.name
  );
  return <h1 className={styles.title}>{title}</h1>;
};

export default ProductTitle;
