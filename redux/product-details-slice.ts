import {ProductType} from '@/graphQl/queries/products/getProductDetails';
import {createSlice} from '@reduxjs/toolkit';

const PRODUCT_DETAILS_INITIAL_STATE: {product: ProductType} = {
  product: {
    uid: '',
    name: '',
    sku: '',
    price_range: {
      minimum_price: {
        regular_price: {
          value: 0,
          currency: '',
        },
        final_price: {
          value: 0,
          currency: '',
        },
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
      },
    },
    stock_status: '',
    media_gallery: [],
    categories: [],
    related_products: [],
    upsell_products: [],
    crosssell_products: [],
  },
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: PRODUCT_DETAILS_INITIAL_STATE,
  reducers: {
    setProduct: (state, action) => {
      console.log(action.payload, 'REDUX');
      state.product = {...action.payload.product};
    },
  },
});

export default productDetailsSlice.reducer;
export const setProduct = productDetailsSlice.actions.setProduct;
