'use client';
import styles from './productCartMenu.module.scss';
import {VariantType} from '@/graphQl/queries/products/getProductDetails';

export interface ProductCartMenuPropsType {
  variant: VariantType;
  name: string;
}

const ProductCartMenu = (product: ProductCartMenuPropsType) => {
  return (
    <div>
      <img src={product.variant.product.media_gallery[0].url} />
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCartMenu;
