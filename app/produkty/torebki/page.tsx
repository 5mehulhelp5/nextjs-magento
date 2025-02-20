import CategoryProducts from '@/components/CategoryProducts/CategoryProducts';
import graphQLClient from '@/graphQl/graphQLClient';
import {GET_PRODUCTS_TYPE} from '@/graphQl/queries';
import {GET_ALL_BAGS} from '@/graphQl/queries/products/bags/getAllBags';

const BagsPage = async () => {
  const bags: GET_PRODUCTS_TYPE = await graphQLClient.request(GET_ALL_BAGS);
  return <CategoryProducts products={bags} />;
};

export default BagsPage;
