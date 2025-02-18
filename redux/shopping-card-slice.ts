import {VariantType} from '@/graphQl/queries/products/getProductDetails';
import {createSlice} from '@reduxjs/toolkit';

const SHOPPING_CART_INITIAL_STATE: {
  showCartMenu: boolean;
  cartItems: VariantType[];
} = {
  showCartMenu: false,
  cartItems: [],
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
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export default shoppingCardSlice.reducer;
export const showCartMenu = shoppingCardSlice.actions.showCartMenu;
export const hideCartMenu = shoppingCardSlice.actions.hideCartMenu;

export const addCartItem = shoppingCardSlice.actions.addCartItem;
