import {ProductType} from '@/graphQl/queries/products/getProductDetails';
import {createSlice} from '@reduxjs/toolkit';

const PRODUCT_DETAILS_INITIAL_STATE: {
  product: ProductType;
  productToDisplay: ProductType;
} = {
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
  productToDisplay: {
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

type setVariantActionPropsType = {
  payload: {
    sku: string;
    price_range: {
      minimum_price: {
        regular_price: {
          value: number;
          currency: string;
        };
        final_price: {
          value: number;
          currency: string;
        };
        discount: {
          amount_off: number;
          percent_off: number;
        };
      };
    };
    stock_status: string;
    uid: string;
  };
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: PRODUCT_DETAILS_INITIAL_STATE,
  reducers: {
    setProduct: (state, action) => {
      console.log(action.payload, 'REDUX');
      state.product = {...action.payload.product};
      state.productToDisplay = {...action.payload.product};
    },
    setVariant: (state, action: setVariantActionPropsType) => {
      state.productToDisplay.sku = action.payload.sku;
      state.productToDisplay.price_range = action.payload.price_range;
      state.productToDisplay.stock_status = action.payload.stock_status;
      state.productToDisplay.uid = action.payload.uid;
    },
    resetVariant: (state, action) => {
      state.productToDisplay = {...action.payload.product};
    },
  },
});

export default productDetailsSlice.reducer;
export const setProduct = productDetailsSlice.actions.setProduct;
export const setProductVariant = productDetailsSlice.actions.setVariant;
export const resetProductVariant = productDetailsSlice.actions.resetVariant;
