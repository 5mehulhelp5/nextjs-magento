import { gql } from 'graphql-request';

export const GET_LAST_5_PRODUCTS = gql`
  query {
    products(search: "", pageSize: 5, currentPage: 1) {
      items {
       categories{
      uid name}
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
        }
      }
      total_count
    }
  }
`;
export const GET_ALL_PRODUCTS = gql`
  query {
    products(search: "", pageSize: 20, currentPage: 1) {
      items {
       categories{
      uid name}
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
        }
      }
      total_count
    }
  }
`;