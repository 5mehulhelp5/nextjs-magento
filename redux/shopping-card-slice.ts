import {ProductCartMenuPropsType} from '@/components/Basket/CartMenu/ProductCartMenu/ProductCartMenu';
import {createSlice} from '@reduxjs/toolkit';

const SHOPPING_CART_INITIAL_STATE: {
  showCartMenu: boolean;
  cartProducts: ProductCartMenuPropsType[];
} = {
  showCartMenu: false,
  cartProducts: [],
};

const shoppingCardSlice = createSlice({
  name: 'shoppingCard',
  initialState: SHOPPING_CART_INITIAL_STATE,
  reducers: {
    showCartMenu: (state) => {
      state.showCartMenu = true;
    },
    hideCartMenu: (state) => {
      state.showCartMenu = false;
    },
    addCartProduct: (state, action: {payload: ProductCartMenuPropsType}) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
  },
});

export default shoppingCardSlice.reducer;
export const showCartMenu = shoppingCardSlice.actions.showCartMenu;
export const hideCartMenu = shoppingCardSlice.actions.hideCartMenu;

export const addCartProduct = shoppingCardSlice.actions.addCartProduct;
