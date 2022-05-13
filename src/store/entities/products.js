import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from './../apiActions';

const slice = createSlice({
  name: "products",
  initialState: {
    list: [
      {
        _id: "61af4f43136bba321f96aa4a",
        name: "کفش 10",
        sale_product: 12000,
        slug: "gooii-1ww",
        photos: [
          {
            original: "https://dictionary.cambridge.org/images/thumb/shoe_noun_002_33438.jpg?version=5.0.239",
            thumbnail: ""
          },
        ],
      },
    ],
    loading: false,
    lastFetch: null,
    errorMessage: null,
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
  },
});

export default slice.reducer;

const { productsRequested, productsRequestFailed, productsReceived } = slice.actions;

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

// SELECTORS
export const selectProducts = (state) => state.entities.products.list;
export const selectProductsLoading = (state) => state.entities.products.loading;
