import {combineReducers, configureStore} from '@reduxjs/toolkit';
import shoppingCartSlice from './shopping-cart-slice';
import productDetailsSlice from './product-details-slice';
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  shoppingCart: shoppingCartSlice,
  productDetails: productDetailsSlice, 
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore =()=>{
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
} 
 const store = makeStore()
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
