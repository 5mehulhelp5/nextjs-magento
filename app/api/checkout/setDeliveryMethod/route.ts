import {setDeliveryAddressGQL} from '@/graphQl/queries/cart/setDeliveryAddress';
import { setDeliveryMethodGQL } from '@/graphQl/queries/cart/setDeliveryMethod';
import {DeliveryAddressType} from '@/redux/shopping-cart-slice';
import {NextResponse} from 'next/server';

const MAGENTO_GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;

interface CartResponse {
  data: {
    setShippingMethodsOnCart: {
      cart: {
        shipping_addresses: DeliveryAddressType[];
      };
    };
  };
}

export async function POST(req: Request) {
  try {
    const {
      cart_id,
      carrier_code,method_code
    } = await req.json();
    const mutation = setDeliveryMethodGQL({
      cart_id,
      carrier_code,method_code
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
