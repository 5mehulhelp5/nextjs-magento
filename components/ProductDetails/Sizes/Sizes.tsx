'use client';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import styles from './sizes.module.scss';
import {useState} from 'react';
import {setProductVariant} from '@/redux/product-details-slice';
import SizeProductButton from '@/components/Ui/Buttons/SizeProductButton/SizeProductButton';
import AddToBasketButton from '@/components/Ui/Buttons/AddToBasketButton/AddToBasketButton';
import {ProductCartMenuPropsType} from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import {addCartProduct} from '@/redux/shopping-card-slice';

const Sizes = () => {
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState<null | number>(null);
  const product = useAppSelector(
    (state) => state.productDetails.productToDisplay
  );
  const sizesVariants = product.variants;

  if (!sizesVariants) return null;
  const selectSizeHandler = (index: number) => {
    setSelected(index);
    const product = sizesVariants[index];
    const dataToSet = {
      sku: product.product.sku,
      price_range: product.product.price_range,
      stock_status: product.product.stock_status,
      uid: product.product.uid,
    };
    dispatch(setProductVariant(dataToSet));
  };
  const addToBasketHandler = () => {
    if (selected === null) return;
    const productToAdd: ProductCartMenuPropsType = {
      variant: sizesVariants[selected],
      name: product.name,
    };
    dispatch(addCartProduct(productToAdd));
  };

  return (
    <div className={styles.container}>
      <h2>Rozmiar</h2>
      <div className={styles.buttonsBox}>
        {sizesVariants?.map((variant, index) => (
          <SizeProductButton
            key={index}
            id={index}
            selected={selected}
            onClick={() => selectSizeHandler(index)}
            title={variant.attributes[0].label}
            stock_status={variant.product.stock_status}
          />
        ))}
      </div>
      <AddToBasketButton
        active={selected !== null}
        onClick={addToBasketHandler}
        title="Dodaj do koszyka"
      />
    </div>
  );
};

export default Sizes;
