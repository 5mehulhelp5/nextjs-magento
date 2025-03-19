import { ProductCartMenuPropsType } from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import { addProductToCartGQL } from '@/graphQl/queries/cart/addProductToCart';
import { NextResponse } from 'next/server'

const MAGENTO_GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;

export interface CartItem {
  id: string;
  quantity: number;
  uid:string;
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
                const mutation = addProductToCartGQL({cart_id,product_sku})

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