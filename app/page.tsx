import Hero from '@/components/Home/Hero/Hero';
import NewProducts from '@/components/Home/NewProducts/NewProducts';
import graphQLClient from '@/graphQl/graphQLClient';
import {GET_PRODUCTS_TYPE} from '@/graphQl/queries';
import {GET_LAST_5_PRODUCTS} from '@/graphQl/queries/products/getProducts';

export default async function Home() {
  const data: GET_PRODUCTS_TYPE =
    await graphQLClient.request(GET_LAST_5_PRODUCTS);
  return (
    <div>
      <Hero />
      <NewProducts newProducts={data} />
    </div>
  );
}
