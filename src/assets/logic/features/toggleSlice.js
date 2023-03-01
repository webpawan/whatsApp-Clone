import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSlidebar: false,
  isModal:false,
};
const toogleSlice = createSlice({
  name: "toolSlice",
  initialState,
  reducers: {
    openSlidebar: (state) => {
      state.isOpenSlidebar = true;
    },
    closeSlidebar: (state) => {
      state.isOpenSlidebar = false;
    },
    openModal: (state) => {
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
  },
});

export default toogleSlice.reducer;
export const {openSlidebar,closeSlidebar,openModal,closeModal} = toogleSlice.actions;

export const isOpenSlidebar = (state) =>state.toogle.isOpenSlidebar;
export const isModal = (state) => state.toogle.isModal;