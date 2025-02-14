import {createSlice} from '@reduxjs/toolkit';

const SHOPPING_CART_INITIAL_STATE = {
  showCartMenu: false,
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
  },
});

export default shoppingCardSlice.reducer;
export const showCartMenu = shoppingCardSlice.actions.showCartMenu;
export const hideCartMenu = shoppingCardSlice.actions.hideCartMenu;
