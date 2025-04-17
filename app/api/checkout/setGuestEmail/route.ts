import { setGuestEmailOnCartGQL } from '@/graphQl/queries/cart/setGuestEmailOnCart';
import {NextResponse} from 'next/server';

const MAGENTO_GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;

interface CartResponse {
  data: {
    setGuestEmailOnCart: {
      cart: {
        email: string;
      };
    };
  };
}

export async function POST(req: Request) {
  try {
    const {
      cart_id,
      email
    } = await req.json();
    const mutation = setGuestEmailOnCartGQL({
      cart_id,
      email
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
    return NextResponse.json({error: 'Error setting email'}, {status: 500});
  }
}
