import graphQLClient from '@/graphQl/graphQLClient'
import { GET_PRODUCTS_TYPE } from '@/graphQl/queries'
import { getProductDetails, PRODUCT_DETAILS_QUERY_RESPONSE_TYPE } from '@/graphQl/queries/products/getProductDetails'


const PulloverDetailsPage =async ({params}:{params:{pulloverID:string}})=>{
    const sku = params.pulloverID
const productData:PRODUCT_DETAILS_QUERY_RESPONSE_TYPE = await graphQLClient.request(getProductDetails(sku))
console.log(productData.products.items[0])
    return <div>pulloverDetails {params.pulloverID}</div>
}

export default PulloverDetailsPage