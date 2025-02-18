import {configureStore} from '@reduxjs/toolkit';
import shoppingCardSlice from './shopping-card-slice';
import productDetailsSlice from './product-details-slice';
export const makeStore = () => {
  return configureStore({
    reducer: {
      shoppingCard: shoppingCardSlice,
      productDetails: productDetailsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
