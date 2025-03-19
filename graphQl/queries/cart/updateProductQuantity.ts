import {gql} from 'graphql-request';

// export type CREATE_CART_QUERY_RESPONSE_TYPE = {
//     data:{
// createGuestCart:{
//     cart:{
// id:string
//     }
// }
//     }
// }

interface UpdateProductQuantityArgsType {
  cart_id: string;
  cart_item_uid: string;
  quantity: number;
}
export const updateProductQuantityGQL = ({
  cart_id,
  cart_item_uid,
  quantity,
}: UpdateProductQuantityArgsType) => {
  const updateProductQuantityQuery = `
   mutation {
   updateCartItems(
    input: {
      cart_id: "${cart_id}"
      cart_items: [
       {
          cart_item_uid: "${cart_item_uid}"
          quantity: ${quantity}
        }
      ]
    }
  ){
    cart {
      id
       prices {
        grand_total{
          value
          currency
        }
      }
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
}`;
  return updateProductQuantityQuery;
};
