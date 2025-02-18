'use client';
import {useAppSelector} from '@/redux/hooks';
import styles from './price.module.scss';

const Price = () => {
  const price = useAppSelector(
    (state) =>
      state.productDetails.product.price_range.minimum_price.final_price.value
  );
  const currency = useAppSelector(
    (state) =>
      state.productDetails.product.price_range.minimum_price.final_price
        .currency
  );
  return (
    <span className={styles.price}>
      {price} {currency}
    </span>
  );
};

export default Price;
