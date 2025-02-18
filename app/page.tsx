import Hero from '@/components/Home/Hero/Hero';
import NewProducts from '@/components/Home/NewProducts/NewProducts';
import graphQLClient from '@/graphQl/graphQLClient';
import {GET_PRODUCTS_TYPE} from '@/graphQl/queries';
import {GET_LAST_5_PRODUCTS} from '@/graphQl/queries/products/getProducts';
// export const getProducts = async()=>{
//   const url = "https://srv721099.hstgr.cloud/"+"rest/default/V1/products"+"?searchCriteria=all"
//   const res = await fetch(url,
//       {mode:'no-cors',
//           headers:{

//               Authorization:`Bearer ${process.env.MAGENTO_ACCESS_TOKEN}`
//           }
//       }
//   )
// const data = await res.json()
// return data
// }
export default async function Home() {
  // const response = await getProducts()
  const data: GET_PRODUCTS_TYPE =
    await graphQLClient.request(GET_LAST_5_PRODUCTS);
  return (
    <div>
      <Hero />
      <NewProducts newProducts={data} />
    </div>
  );
}
