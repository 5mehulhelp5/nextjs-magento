import {gql} from 'graphql-request';

export type GET_PRODUCTS_TYPE = {
  products: {
    items: {
      categories:{
        uid:string,
        name:string
      }[]
      name: string;
      sku: string;
      price_range: {
        minimum_price: {
          regular_price: {
            value: number;
            currency: string;
          };
        };
      };
      image: {
        url: string;
      };
    }[];
  };
  total_count: number;
};