'use client';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import styles from './sizes.module.scss';
import {useState} from 'react';
import {setProductVariant} from '@/redux/product-details-slice';
import SizeProductButton from '@/components/Ui/Buttons/SizeProductButton/SizeProductButton';
import AddToBasketButton from '@/components/Ui/Buttons/AddToBasketButton/AddToBasketButton';
import {ProductCartMenuPropsType} from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import {addCartProduct} from '@/redux/shopping-cart-slice';
import { usePathname } from 'next/navigation';
import graphQLClient from '@/graphQl/graphQLClient';
import { NextResponse } from 'next/server';
import { CartResponse } from '@/app/api/addProductToCart/route';

const Sizes = () => {
  const dispatch = useAppDispatch();
const pathname = usePathname()
  const [selected, setSelected] = useState<null | number>(null);
  const product = useAppSelector(
    (state) => state.productDetails.productToDisplay
  );
  const cartId = useAppSelector(state=>state.shoppingCart.cartId)
  const sizesVariants = product.variants;

  if (!sizesVariants) return null;
  const selectSizeHandler = (index: number) => {
    setSelected(index);
    const product = sizesVariants[index];
    const dataToSet = {
      sku: product.product.sku,
      price_range: product.product.price_range,
      stock_status: product.product.stock_status,
      uid: product.product.uid,
    };
    dispatch(setProductVariant(dataToSet));
  };

const addProductToCart = async(cart_id:string,product_sku:string )=> {
  const response = await fetch("/api/addProductToCart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart_id, product_sku }),
  });

  const data = await response.json();
  return data
}

// const addProductToCartApi = async()=>{
//       const response = await fetch("/api/addProductToCart", {
//         method: "POST",
//         body
//       });
//       const data= await response.json();
//       dispatch(setCartId(data.createGuestCart.cart.id))
//     }

  const addToBasketHandler = async () => {
    if (selected === null) return;
    if(!cartId)return;
    // const productToAdd: ProductCartMenuPropsType = {
    //   variant: sizesVariants[selected],
    //   name: product.name,
    //   amount:1,
    //   link:pathname
    // };
    const cart:CartResponse = await addProductToCart(cartId,sizesVariants[selected].product.sku);
    if(!cart)return;
    const cartItems = cart.data.addProductsToCart.cart.items
    dispatch(addCartProduct({array:cartItems,link:pathname}));
    // const basket = await graphQLClient.request(addProductToCartGQL({cart_id:cartId,product_sku:sizesVariants[selected].product.sku})) 
    
  };

  return (
    <div className={styles.container}>
      <h2>Rozmiar</h2>
      <div className={styles.buttonsBox}>
        {sizesVariants?.map((variant, index) => (
          <SizeProductButton
            key={index}
            id={index}
            selected={selected}
            onClick={() => selectSizeHandler(index)}
            title={variant.attributes[0].label}
            stock_status={variant.product.stock_status}
          />
        ))}
      </div>
      <AddToBasketButton
        active={selected !== null}
        onClick={addToBasketHandler}
        title="Dodaj do koszyka"
      />
    </div>
  );
};

export default Sizes;
