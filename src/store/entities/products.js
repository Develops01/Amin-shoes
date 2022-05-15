import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./../apiActions";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    errorMessage: null,
    singleProduct: {
      name: null,
      sale_product: null,
    },
    shopCart: [],
  },
  reducers: {
    productsRequested: (state) => {
      state.loading = true;
    },

    productsRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.errorMessage;
    },

    productsReceived: (state, action) => {
      state.loading = false;
      state.lastFetch = Date.now();
      state.list = action.payload.data.products;
    },
    SingleProductReceived: (state, action) => {
      state.singleProduct = action.payload.data.product;
    },
    productAddedToCart: (state, { payload: { id } }) => {
      const product = state.list.find((p) => p._id === id);

      const alreadyExist = state.shopCart.find((p) => p._id === id);
      if (alreadyExist) {
        alreadyExist.quantity++;
        return;
      }

      product.quantity = 1;
      state.shopCart.push(product);
    },
    productRemovedFromCart: (state, action) => {
      state.shopCart = state.shopCart.filter((item) => {
        if (item._id === action.payload.id && item.quantity > 1) {
          item.quantity--;
          return true;
        }
        return item._id !== action.payload.id;
      });
    },
  },
});

export default slice.reducer;

const {
  productsRequested,
  productsRequestFailed,
  productsReceived,
  SingleProductReceived,
  productAddedToCart,
  productRemovedFromCart,
} = slice.actions;

// ACTIONS
export const loadProducts = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.products;
  const minutes = process.env.REACT_APP_API_CACHE_IN_MIN;

  const diffInMinutes = moment().diff(moment(lastFetch), "M");

  if (diffInMinutes < minutes) return;

  return dispatch(
    apiCallBegan({
      url: process.env.REACT_APP_API_PRODUCTS_URL,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const loadProductById = (slug) => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url: process.env.REACT_APP_API_PRODUCTS_URL + "/" + slug,
      onSuccess: SingleProductReceived.type,
    })
  );
};

export const addProductToCart = (id) => (dispatch) => {
  return dispatch({
    type: productAddedToCart.type,
    payload: {
      id,
    },
  });
};

export const removeProductFromCart = (id) => (dispatch) => {
  return dispatch({
    type: productRemovedFromCart.type,
    payload: {
      id,
    },
  });
};

// SELECTORS
export const selectProducts = (state) => state.entities.products.list;
export const selectCart = (state) => state.entities.products.shopCart;
export const selectProductsLoading = (state) => state.entities.products.loading;
export const selectSingleProduct = (state) =>
  state.entities.products.singleProduct;
