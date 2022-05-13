import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",
  initialState: {
    courentModal: null,
  },
  reducers: {
    courentModalSet: (state, { payload }) => {
      state.courentModal = payload;
    },
    modalClosed: (state) => {
      state.courentModal = null;
    }
  },
});

export default slice.reducer;

const { courentModalSet, modalClosed } = slice.actions;

// ACTIONS
export const setCourentModal = (payload) => ({
    type: courentModalSet.type,
    payload: payload
});

export const closeModal = () => ({
  type: modalClosed.type
})

// SELECTORS
export const selectCourentModal = (state) => state.entities.modal.courentModal;