import {ProductCartMenuPropsType} from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import {createSlice} from '@reduxjs/toolkit';

interface CartPricesGrandTotal{
  
    grand_total: {
      value: number;
      currency: string;
    };
  
}

const SHOPPING_CART_INITIAL_STATE: {
  showCartMenu: boolean;
  // cartProducts: ProductCartMenuPropsType[];
  cartProducts: ProductCartMenuPropsType[];
  cartId: string | null;
  prices:CartPricesGrandTotal
} = {
  showCartMenu: false,
  cartProducts: [],
  cartId: null,
  prices:{
    grand_total:{
      value:0,
      currency:'PLN'
    }
  }
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
    // addCartProduct: (state, action: {payload: ProductCartMenuPropsType}) => {
    //   const itemExists=state.cartProducts.findIndex(product=>product.variant.product.uid===action.payload.variant.product.uid)
    //   if(itemExists!==-1)state.cartProducts[itemExists].amount+=1
    //   if(itemExists===-1)state.cartProducts = [...state.cartProducts, action.payload];

    // },
    addCartProduct: (
      state,
      action: {payload: {cart_items: ProductCartMenuPropsType[],prices:CartPricesGrandTotal; link: string}}
    ) => {
      // const itemExists=state.cartProducts.findIndex(product=>product.variant.product.uid===action.payload.variant.product.uid)
      // if(itemExists!==-1)state.cartProducts[itemExists].amount+=1
      // if(itemExists===-1)state.cartProducts = [...state.cartProducts, action.payload];
      console.log(action.payload.cart_items)
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
    },
    updateCartProductQuantity: (
      state,
      action: {payload: {cart_items: ProductCartMenuPropsType[],prices:CartPricesGrandTotal}}
    ) => {
      const mergedArray: ProductCartMenuPropsType[] = action.payload.cart_items.map(
        (newArrayItem) => {
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
        }
      );
      state.cartProducts = mergedArray;
      state.prices = action.payload.prices
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
