'use client'
import { GET_PRODUCTS_TYPE } from '@/graphQl/queries';
import styles from './categoryProducts.module.scss'
import ProductCard from '../Ui/Links/ProductCard/ProductCard';

type CategoryProductsPropsType = {products: GET_PRODUCTS_TYPE};

const CategoryProducts = ({products}:CategoryProductsPropsType) =>{
    return  <div className={styles.container}>
    {products.products.items.map((product,index) => (
      <ProductCard
      key={index}
        sku={product.sku}
        img={product.image.url}
        title={product.name}
        price={product.price_range.minimum_price.regular_price.value}
        currency={product.price_range.minimum_price.regular_price.currency}
        category={product.categories[0]}
      />
    ))}
  </div>
}

export default CategoryProducts