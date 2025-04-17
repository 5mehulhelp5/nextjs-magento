import {ProductCartMenuPropsType} from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import {ProductCardPropsType} from '@/components/Ui/Links/ProductCard/ProductCard';
import Error from 'next/error';

export const createCart = async () => {
  const response = await fetch('/api/cart/createCart', {
    method: 'POST',
  });

  const data = await response.json();
  return data;
};

type AddProductToCartType = (
  cart_id: string,
  product_sku: string
) => Promise<
  | {
      cart_items: ProductCartMenuPropsType[];
      prices: {
        grand_total: {
          value: number;
          currency: string;
        };
      };
    }
  | undefined
>;

export const addProductToCart: AddProductToCartType = async (
  cart_id: string,
  product_sku: string
) => {
  const response = await fetch('/api/cart/addProductToCart', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({cart_id, product_sku}),
  });

  const data = await response.json();
  console.log(data);
  const modifiedData = {
    cart_items: data.data.addProductsToCart.cart.items,
    prices: data.data.addProductsToCart.cart.prices,
  };
  return modifiedData;
};

type UpdateProductQuantityType = (
  cart_id: string,
  cart_item_uid: string,
  quantity: number
) => Promise<
  | {
      error: {status: boolean; message: string};
      data: {
        cart_items: ProductCartMenuPropsType[];
        prices: {
          grand_total: {
            value: number;
            currency: string;
          };
        };
      } | null;
    }
  | undefined
>;

export const updateProductQuantity: UpdateProductQuantityType = async (
  cart_id: string,
  cart_item_uid: string,
  quantity: number
) => {
  const response = await fetch('/api/cart/updateProductQuantity', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({cart_id, cart_item_uid, quantity}),
  });

  const data = await response.json();
  console.log(data);

  if (!data.errors) {
    return {
      error: {
        status: false,
        message: '',
      },
      data: {
        cart_items: data.data.updateCartItems.cart.items,
        prices: data.data.updateCartItems.cart.prices,
      },
    };
  }

  if (data.errors) {
    const message: String = data.errors[0].message;
    const qtyNotAvaible = message.includes(
      'The requested qty is not available'
    );
    if (qtyNotAvaible) {
      return {
        error: {
          status: true,
          message: 'Większa liczba sztuk niedostępna!',
        },
        data: null,
      };
    } else {
      return {
        error: {
          status: true,
          message: 'Wystąpił niespodziewany błąd!',
        },
        data: null,
      };
    }
  }
};
