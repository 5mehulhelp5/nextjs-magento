import CategoryProducts from '@/components/CategoryProducts/CategoryProducts'
import graphQLClient from '@/graphQl/graphQLClient'
import { GET_PRODUCTS_TYPE } from '@/graphQl/queries'
import { GET_ALL_PULLOVERS } from '@/graphQl/queries/products/pullovers/getAllPullovers'

const PulloversPage=async()=>{
    const pullovers:GET_PRODUCTS_TYPE = await graphQLClient.request(GET_ALL_PULLOVERS)
    return <CategoryProducts products={pullovers}/>
}

export default PulloversPage