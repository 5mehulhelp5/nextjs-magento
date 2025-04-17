import {setBillingAddressGQL} from '@/graphQl/queries/cart/setBillingAddress';
import {BillingAddressType} from '@/redux/shopping-cart-slice';
import {NextResponse} from 'next/server';

const MAGENTO_GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;

interface CartResponse {
  data: {
    setBillingAddressOnCart: {
      cart: {
        billing_address: BillingAddressType;
      };
    };
  };
}

export async function POST(req: Request) {
  try {
    const {
      cart_id,
      city,
      country_code,
      firstname,
      lastname,
      telephone,
      street,
      postcode,
    } = await req.json();
    const mutation = setBillingAddressGQL({
      cart_id,
      city,
      country_code,
      firstname,
      lastname,
      telephone,
      street,
      postcode,
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
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({error: 'Error adding product'}, {status: 500});
  }
}
