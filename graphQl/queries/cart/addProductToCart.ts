import { gql } from 'graphql-request';

// export type CREATE_CART_QUERY_RESPONSE_TYPE = {
//     data:{
// createGuestCart:{
//     cart:{
// id:string
//     }
// }
//     }
// }

interface AddProductToCartArgsType{
    cart_id:string;
    product_sku:string
}
export const addProductToCart=({cart_id,product_sku}:AddProductToCartArgsType)=>{

    const addProductToCartQuery = `
   mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "${cart_id}"
      cart_items: [
        {
          data: {
            quantity: 1,
            sku: "${product_sku}"
          }
        }
      ]
    }
  ) {
    cart {
      id
      items {
        id
        quantity
        product {
          name
          sku
          price_range {
            minimum_price {
              final_price {
                value
                currency
              }
            }
          }
          media_gallery {
            url
            label
          }
        }
      }
    }
  }
}`

return addProductToCartQuery
}
 