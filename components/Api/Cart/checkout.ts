import { AvailablePaymentMethodType, BillingAddressType, CartPricesGrandTotal, DeliveryAddressType, DeliveryMethodType } from '@/redux/shopping-cart-slice';








interface GetPaymentMethodsPropsType{
  cart_id:string;
}

type GetPaymentMethodsType = ({}:GetPaymentMethodsPropsType)=>
  Promise<
  { 
    data: {
             cart: {
              available_payment_methods: AvailablePaymentMethodType[];
             };
         }
  } | undefined>

export const getPaymentMethods:GetPaymentMethodsType= async( {cart_id} )=> {
  
  const response = await fetch("/api/checkout/getPaymentMethods", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart_id}),
  });

  const data = await response.json();
  console.log(data)
  return data
}

//SET DELIVERY ADDRESS
interface SetDeliveryAddressPropsType{
  cart_id: string,
  firstname:string,
  lastname:string,
street:string,
city:string,
postcode:string,
country_code:string,
telephone:string,
email:string  
}
type SetDeliveryAddressType = ({}:SetDeliveryAddressPropsType)=>
Promise<
{ 
  data: {
         setShippingAddressesOnCart: {
           cart: {
             shipping_addresses: DeliveryAddressType[];
           };
         };
       }
} | undefined>


//SET DELIVERY ADDRESS
export const setDeliveryAddress:SetDeliveryAddressType= async( {cart_id,city,country_code,firstname,lastname,telephone,street,postcode,email} )=> {
  
        const response = await fetch("/api/checkout/setDeliveryAddress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart_id,city,country_code,firstname,lastname,telephone,street,postcode }),
        });
      
        const data = await response.json();
        return data
}

//SET DELIVERY METHOD
interface SetDeliveryMethodPropsType{
  cart_id: string;
  carrier_code:string,
  method_code:string
}

type SetDeliveryMethodType = ({}:SetDeliveryMethodPropsType)=>
  Promise<
{ 
    data: {
      setShippingMethodsOnCart
      : {
             cart: {
              prices:CartPricesGrandTotal,
               shipping_addresses: {
                selected_shipping_method:DeliveryMethodType
                }[];
             };
           };
         }
} | undefined>

export const setDeliveryMethod:SetDeliveryMethodType= async( {cart_id,carrier_code,method_code} )=> {
  
  const response = await fetch("/api/checkout/setDeliveryMethod", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart_id,carrier_code,method_code }),
  });

  const data = await response.json();
  return data
}

//SET BILLING ADDRESS
interface SetBillingAddressPropsType{
  cart_id: string,
  firstname:string,
  lastname:string,
street:string,
city:string,
postcode:string,
country_code:string,
telephone:string,
email:string  
}
type SetBillingAddressType = ({}:SetBillingAddressPropsType)=>
  Promise<
{ 
    data: {
      setBillingAddressOnCart: {
             cart: {
               billing_address:BillingAddressType
             }
           };
         }
} | undefined>

export const setBillingAddress:SetBillingAddressType= async( {cart_id,city,country_code,firstname,lastname,telephone,street,postcode,email} )=> {
  
  const response = await fetch("/api/checkout/setBillingAddress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart_id,city,country_code,firstname,lastname,telephone,street,postcode }),
  });

  const data = await response.json();
  return data
}

//SET GUEST EMAIL
interface SetGuestEmailPropsType{
  cart_id: string,
email:string  
}
type SetGuestEmailType = ({}:SetGuestEmailPropsType)=>
  Promise<
{ 
    data: {
      setGuestEmailOnCart: {
             cart: {
               email:string
             }
           };
         }
} | undefined>

export const setGuestEmail:SetGuestEmailType= async( {cart_id,email} )=> {
  
  const response = await fetch("/api/checkout/setGuestEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart_id,email }),
  });

  const data = await response.json();
  return data
}

