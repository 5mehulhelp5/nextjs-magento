import { gql } from 'graphql-request';


interface AddProductToCartGQLArgsType{
    cart_id:string;
    product_sku:string
}
export const addProductToCartGQL=({cart_id,product_sku}:AddProductToCartGQLArgsType)=>{

    const addProductToCartQuery = `
   mutation {
  addProductsToCart(
    cartId: "${cart_id}"
      cartItems: [
       {sku:"${product_sku}",quantity:1}
      ]
  ){
    cart {
      id
      items {
        id
        quantity
         uid
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
         image{
         url
         }
        }
      }
    }
  }
}`

return addProductToCartQuery
}
 