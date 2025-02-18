'use client';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import styles from './sizes.module.scss';
import {useState} from 'react';
import {addCartItem} from '@/redux/shopping-card-slice';

const Sizes = () => {
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState();
  const sizesVariants = useAppSelector(
    (state) => state.productDetails.product.variants
  );
  if (!sizesVariants) return null;
  const selectSizeHandler = (index: number) => {
    const product = sizesVariants[index];
    dispatch(addCartItem(product));
  };

  return (
    <div className={styles.container}>
      <h2>Rozmiar</h2>
      <div>
        {sizesVariants?.map((variant, index) => (
          <button onClick={() => selectSizeHandler(index)}>
            {variant.attributes[0].label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
