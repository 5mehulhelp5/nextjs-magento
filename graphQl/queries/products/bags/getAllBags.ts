import { gql } from 'graphql-request';


export const GET_ALL_BAGS = gql`
  query {
    products(
      filter: {category_id: {eq: "5"}}
      search: ""
      pageSize: 10
      currentPage: 1
    ) {
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