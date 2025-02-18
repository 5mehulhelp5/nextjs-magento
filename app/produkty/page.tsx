import CategoryProducts from '@/components/CategoryProducts/CategoryProducts';
import graphQLClient from '@/graphQl/graphQLClient';
import {GET_PRODUCTS_TYPE} from '@/graphQl/queries';
import {GET_ALL_PRODUCTS} from '@/graphQl/queries/products/getProducts';

const ProductsPage = async () => {
  const products: GET_PRODUCTS_TYPE =
    await graphQLClient.request(GET_ALL_PRODUCTS);
  return <CategoryProducts products={products} />;
};

export default ProductsPage;
