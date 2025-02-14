import { gql } from 'graphql-request';


export const getProductDetails = (sku:string)=>{
    
    const productDetailsQuery = gql`
    query {
  products(
    filter: {
      sku: { eq: "${sku}" }
    }
  ) {
    items {
      uid
      name
      sku
      description {
        html
      }
      short_description {
        html
      }
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
      stock_status
      media_gallery {
        url
        label
      }
      categories {
        id
        name
        url_key
      }
      related_products {
        id
        name
        sku
      }
      upsell_products {
        id
        name
        sku
      }
      crosssell_products {
        id
        name
        sku
      }
    }
  }
}`

return productDetailsQuery
}




export interface PRODUCT_DETAILS_QUERY_RESPONSE_TYPE {
    products: {
      items: Product[];
    };
  }

export type PRODUCT_DETAILS_TYPE ={
    product:Product
  }
  
  export interface Product {
    id: string;
    name: string;
    sku: string;
    description?: {
      html: string;
    };
    short_description?: {
      html: string;
    };
    price_range: {
      minimum_price: {
        regular_price: Price;
        final_price: Price;
        discount?: Discount;
      };
    };
    stock_status: "IN_STOCK" | "OUT_OF_STOCK";
    media_gallery: Media[];
    categories: Category[];
    related_products: RelatedProduct[];
    upsell_products: RelatedProduct[];
    crosssell_products: RelatedProduct[];
  }
  
  export interface Price {
    value: number;
    currency: string;
  }
  
  export interface Discount {
    amount_off: number;
    percent_off: number;
  }
  
  export interface Media {
    url: string;
    label?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    url_key: string;
  }
  
  export interface RelatedProduct {
    id: string;
    name: string;
    sku: string;
  }
  