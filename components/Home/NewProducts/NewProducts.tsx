'use client';
import { GET_PRODUCTS_TYPE} from '@/graphQl/queries';
import styles from './newProducts.module.scss';
import ProductCard from '@/components/Ui/Links/ProductCard/ProductCard';

type NewProductsPropsType = {newProducts: GET_PRODUCTS_TYPE};

const NewProducts = ({newProducts}: NewProductsPropsType) => {
  return (
    <div className={styles.container}>
      {newProducts.products.items.map((product) => (
        <ProductCard
          sku={product.sku}
          img={product.image.url}
          title={product.name}
          price={product.price_range.minimum_price.regular_price.value}
          currency={product.price_range.minimum_price.regular_price.currency}
          category={product.categories[0]}
        />
      ))}
    </div>
  );
};

export default NewProducts;
