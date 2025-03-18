import { gql } from 'graphql-request';

export type CREATE_CART_QUERY_RESPONSE_TYPE = {
    data:{
createGuestCart:{
    cart:{
id:string
    }
}
    }
}


export const CREATE_CART = gql`
mutation {
  createGuestCart {
      cart {
          id
      }
  }
}
`