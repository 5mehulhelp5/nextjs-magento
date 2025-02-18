'use client';
import {useAppSelector} from '@/redux/hooks';
import styles from './description.module.scss';

const Description = () => {
  const description = useAppSelector(
    (state) =>
      state.productDetails.product.custom_attributesV2?.items.filter(
        (item) => item.code === 'description'
      )[0].value
  );
  return <span className={styles.description}>{description}</span>;
};

export default Description;
