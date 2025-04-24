import {ProductCartMenuPropsType} from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import {createSlice} from '@reduxjs/toolkit';

interface CartPricesGrandTotal {
  grand_total: {
    value: number;
    currency: string;
  };
}
export interface DeliveryAddressType {
  firstname: string;
  lastname: string;
  company: string;
  street: string[];
  city: string;
  region: {
    code: string;
    label: string;
  };
  postcode: string;
  telephone: string;
  country: {
    code: string;
    label: string;
  };
  available_shipping_methods: DeliveryMethodType[];
}
export interface BillingAddressType {
  firstname: string;
  lastname: string;
  company: string;
  street: string[];
  city: string;
  region: {
    code: string;
    label: string;
  };
  postcode: string;
  telephone: string;
  country: {
    code: string;
    label: string;
  };
}

export interface DeliveryMethodType {
  carrier_code: string;
  carrier_title: string;
  method_code: string;
  method_title: string;
}

const SHOPPING_CART_INITIAL_STATE: {
  showCartMenu: boolean;
  // cartProducts: ProductCartMenuPropsType[];
  cartProducts: ProductCartMenuPropsType[];
  cartId: string | null;
  prices: CartPricesGrandTotal;
  deliveryAddress: DeliveryAddressType;
  billingAddress: BillingAddressType;
  guestEmail:string;
} = {
  showCartMenu: false,
  cartProducts: [],
  cartId: null,
  prices: {
    grand_total: {
      value: 0,
      currency: 'PLN',
    },
  },
  deliveryAddress: {
    firstname: '',
    lastname: '',
    company: '',
    street: [""],
    city: '',
    region: {
      code: '',
      label: '',
    },
    postcode: '',
    telephone: '',
    country: {
      code: '',
      label: '',
    },
    available_shipping_methods: [],
  },
  billingAddress: {
    firstname: '',
    lastname: '',
    company: '',
    street: [""],
    city: '',
    region: {
      code: '',
      label: '',
    },
    postcode: '',
    telephone: '',
    country: {
      code: '',
      label: '',
    },
  },
  guestEmail:""
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: SHOPPING_CART_INITIAL_STATE,
  reducers: {
    showCartMenu: (state) => {
      state.showCartMenu = true;
    },
    hideCartMenu: (state) => {
      state.showCartMenu = false;
    },
    setCartId: (state, action) => {
      state.cartId = action.payload;
    },
    setDeliveryAddress: (state, action: {payload: DeliveryAddressType}) => {
      state.deliveryAddress = action.payload;
    },
    setBillingAddress: (state, action: {payload: BillingAddressType}) => {
      state.billingAddress = action.payload;
    },
    setGuestEmail:(state,action:{payload:string})=>{
      state.guestEmail=action.payload
    },
    // addCartProduct: (state, action: {payload: ProductCartMenuPropsType}) => {
    //   const itemExists=state.cartProducts.findIndex(product=>product.variant.product.uid===action.payload.variant.product.uid)
    //   if(itemExists!==-1)state.cartProducts[itemExists].amount+=1
    //   if(itemExists===-1)state.cartProducts = [...state.cartProducts, action.payload];

    // },
    addCartProduct: (
      state,
      action: {
        payload: {
          cart_items: ProductCartMenuPropsType[];
          prices: CartPricesGrandTotal;
          link: string;
        };
      }
    ) => {
      // const itemExists=state.cartProducts.findIndex(product=>product.variant.product.uid===action.payload.variant.product.uid)
      // if(itemExists!==-1)state.cartProducts[itemExists].amount+=1
      // if(itemExists===-1)state.cartProducts = [...state.cartProducts, action.payload];
      console.log(action.payload.cart_items);
      if (state.cartProducts.length === 0) {
        state.cartProducts = [
          {...action.payload.cart_items[0], link: action.payload.link},
        ];
      }
      if (state.cartProducts.length > 0) {
        const mergedArray: ProductCartMenuPropsType[] =
          action.payload.cart_items.map((newArrayItem) => {
            const itemExists = state.cartProducts.findIndex(
              (item) => item.product.sku === newArrayItem.product.sku
            );
            if (itemExists !== -1) {
              return {
                ...newArrayItem,
                link: state.cartProducts[itemExists].link,
              };
            } else {
              return {
                ...newArrayItem,
                link: action.payload.link,
              };
            }
          });
        state.cartProducts = mergedArray;
      }
      state.prices = action.payload.prices;
    },
    updateCartProductQuantity: (
      state,
      action: {
        payload: {
          cart_items: ProductCartMenuPropsType[];
          prices: CartPricesGrandTotal;
        };
      }
    ) => {
      const mergedArray: ProductCartMenuPropsType[] =
        action.payload.cart_items.map((newArrayItem) => {
          const itemExists = state.cartProducts.findIndex(
            (item) => item.product.sku === newArrayItem.product.sku
          );
          if (itemExists !== -1) {
            return {
              ...newArrayItem,
              link: state.cartProducts[itemExists].link,
            };
          } else {
            return {
              ...newArrayItem,
              link: '',
            };
          }
        });
      state.cartProducts = mergedArray;
      state.prices = action.payload.prices;
    },
  },
});

export default shoppingCartSlice.reducer;
export const showCartMenu = shoppingCartSlice.actions.showCartMenu;
export const hideCartMenu = shoppingCartSlice.actions.hideCartMenu;
export const addCartProduct = shoppingCartSlice.actions.addCartProduct;
export const updateCartProductQuantity =
  shoppingCartSlice.actions.updateCartProductQuantity;
export const setCartId = shoppingCartSlice.actions.setCartId;
export const setDeliveryAddress = shoppingCartSlice.actions.setDeliveryAddress;
export const setBillingAddress = shoppingCartSlice.actions.setBillingAddress;
export const setGuestEmail = shoppingCartSlice.actions.setGuestEmail
