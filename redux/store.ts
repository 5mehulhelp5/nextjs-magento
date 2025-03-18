import {configureStore} from '@reduxjs/toolkit';
import shoppingCartSlice from './shopping-cart-slice';
import productDetailsSlice from './product-details-slice';
export const makeStore = () => {
  return configureStore({
    reducer: {
      shoppingCart: shoppingCartSlice,
      productDetails: productDetailsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
