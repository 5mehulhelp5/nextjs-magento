import { BillingAddressType, DeliveryAddressType } from '@/redux/shopping-cart-slice';

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

export const setDeliveryAddress:SetDeliveryAddressType= async( {cart_id,city,country_code,firstname,lastname,telephone,street,postcode,email} )=> {
  
        const response = await fetch("/api/checkout/setDeliveryAddress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart_id,city,country_code,firstname,lastname,telephone,street,postcode }),
        });
      
        const data = await response.json();
        return data
}

export const setBillingAddress:SetBillingAddressType= async( {cart_id,city,country_code,firstname,lastname,telephone,street,postcode,email} )=> {
  
  const response = await fetch("/api/checkout/setBillingAddress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart_id,city,country_code,firstname,lastname,telephone,street,postcode }),
  });

  const data = await response.json();
  return data
}
export const setGuestEmail:SetGuestEmailType= async( {cart_id,email} )=> {
  
  const response = await fetch("/api/checkout/setGuestEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart_id,email }),
  });

  const data = await response.json();
  return data
}

