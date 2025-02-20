'use client';
import {ProductType} from '@/graphQl/queries/products/getProductDetails';
import styles from './productDetails.module.scss';
import {useAppDispatch} from '@/redux/hooks';
import {setProduct} from '@/redux/product-details-slice';

interface ProductDetailsPropsType {
  children: React.ReactNode;
  product: ProductType;
}

const ProductDetails = ({children, product}: ProductDetailsPropsType) => {
  const dispatch = useAppDispatch();
  dispatch(setProduct({product}));
  return <div className={styles.container}>{children}</div>;
};
export default ProductDetails;
