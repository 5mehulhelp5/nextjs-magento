import { ProductCartMenuPropsType } from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import { NextResponse } from 'next/server'

const MAGENTO_GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;

export interface CartItem {
  id: string;
  quantity: number;
  product: {
    name: string;
    sku: string;
    image: {
      url: string;
    };
    price_range: {
      minimum_price: {
        final_price: {
          value: number;
          currency: string;
        };
      };
    };
  };
}

export interface CartResponse {
  data: {
    addProductsToCart: {
      cart: {
        id: string;
        items: ProductCartMenuPropsType[];
      };
    };
  };
}

export async function POST(req:Request) {
   
        try{
                const { cart_id,product_sku } = await req.json();
                const mutation = `
   mutation {
  addProductsToCart(
    cartId: "${cart_id}"
    cartItems: [{sku:"${product_sku}",quantity:1}]
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
         image{
         url
         }
        }
      }
    }
  }
}`
const response = await fetch(MAGENTO_GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: mutation }),
      });
  
      const data:CartResponse = await response.json();
  
      return NextResponse.json(data);
        }catch (error) {
                return NextResponse.json({ error: "Error adding product" }, { status: 500 });
              }
        
   
    
}