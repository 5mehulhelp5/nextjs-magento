
export const addProductToCart = async(cart_id:string,product_sku:string )=> {

    const response = await fetch("/api/cart/addProductToCart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart_id, product_sku }),
    });
  
    const data = await response.json();
    return data
  }
 export const createCart = async()=>{

        const response = await fetch("/api/cart/createCart", {
          method: "POST",
        });

        const data= await response.json();
        return data
      }

      export const updateProductQuantity = async( cart_id:string,
        cart_item_uid:string,
        quantity:number )=> {
  
        const response = await fetch("/api/cart/updateProductQuantity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart_id,cart_item_uid,quantity }),
        });
      
        const data = await response.json();
        return data.items
      }