import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",
  initialState: {
    currentModal: null,
  },
  reducers: {
    currentModalSet: (state, { payload }) => {
      state.currentModal = payload;
    },
    modalClosed: (state) => {
      state.currentModal = null;
    }
  },
});

export default slice.reducer;

const { currentModalSet, modalClosed } = slice.actions;

// ACTIONS
export const setCurrentModal = (payload) => ({
    type: currentModalSet.type,
    payload: payload
});

export const closeModal = () => ({
  type: modalClosed.type
})

// SELECTORS
export const selectCurrentModal = (state) => state.entities.modal.currentModal;