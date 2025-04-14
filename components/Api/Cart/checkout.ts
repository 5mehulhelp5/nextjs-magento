import { ShippingAddressType } from '@/redux/shopping-cart-slice';

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
                       shipping_addresses: ShippingAddressType[];
                     };
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


