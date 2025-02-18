'use client';
import {useAppSelector} from '@/redux/hooks';
import styles from './shortDescription.module.scss';

const ShortDescription = () => {
  const description = useAppSelector(
    (state) =>
      state.productDetails.product.custom_attributesV2?.items.filter(
        (item) => item.code === 'short_description'
      )[0].value
  );

  return <span className={styles.shortDescription}>{description}</span>;
};

export default ShortDescription;
