
import { getPaymentMethodsGQL } from '@/graphQl/queries/cart/getPaymentMethods';
import {AvailablePaymentMethodType} from '@/redux/shopping-cart-slice';
import {NextResponse} from 'next/server';

const MAGENTO_GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;

interface CartResponse {
   data: {
               cart: {
                available_payment_methods: AvailablePaymentMethodType[];
               };
           }
    
}

export async function POST(req: Request) {
  try {
    const {
      cart_id
    } = await req.json();
    const mutation = getPaymentMethodsGQL({
      cart_id
    });
    // console.log(mutation)
    const response = await fetch(MAGENTO_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: mutation}),
    });

    const data: CartResponse = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({error: 'Error adding product'}, {status: 500});
  }
}
