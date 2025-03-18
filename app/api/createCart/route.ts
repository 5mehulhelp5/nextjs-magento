import graphQLClient from '@/graphQl/graphQLClient'
import { CREATE_CART } from '@/graphQl/queries/cart/createCart'
import { NextResponse } from 'next/server'

export async function POST() {
   
        try{
                const data= await graphQLClient.request(CREATE_CART)
                return NextResponse.json(data);
        }catch (error) {
                return NextResponse.json({ error: "Error creating cart" }, { status: 500 });
              }
        
   
    
}