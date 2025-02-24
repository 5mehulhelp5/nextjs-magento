import {ProductCartMenuPropsType} from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import {createSlice} from '@reduxjs/toolkit';

const SHOPPING_CART_INITIAL_STATE: {
  showCartMenu: boolean;
  cartProducts: ProductCartMenuPropsType[];
  cartId:string|null
} = {
  showCartMenu: false,
  cartProducts: [],
  cartId:null
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
    setCartId:(state,action)=>{
      state.cartId=action.payload
    },
    addCartProduct: (state, action: {payload: ProductCartMenuPropsType}) => {
      const itemExists=state.cartProducts.findIndex(product=>product.variant.product.uid===action.payload.variant.product.uid)
      if(itemExists!==-1)state.cartProducts[itemExists].amount+=1
      if(itemExists===-1)state.cartProducts = [...state.cartProducts, action.payload];
      
    },
  },
});

export default shoppingCartSlice.reducer;
export const showCartMenu = shoppingCartSlice.actions.showCartMenu;
export const hideCartMenu = shoppingCartSlice.actions.hideCartMenu;
export const addCartProduct = shoppingCartSlice.actions.addCartProduct;
export const setCartId = shoppingCartSlice.actions.setCartId;