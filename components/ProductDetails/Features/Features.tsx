'use client';
import {useAppSelector} from '@/redux/hooks';
import styles from './features.module.scss';

const Features = () => {
  const features = useAppSelector((state) =>
    state.productDetails.product.custom_attributesV2?.items
      .filter((item) => item.code === 'cechy')[0]
      .value?.split('#')
  );
  if (!features) return null;
  return <ul>{features?.map((item, index) => <li key={index}>{item}</li>)}</ul>;
};

export default Features;
