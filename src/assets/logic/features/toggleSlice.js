import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSlidebar: false,
  isModal: false,
  isUserPic: false,
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
    openUserModalPic: (state) => {
      state.isUserPic = true;
    },
    closeUserModalPic: (state) => {
      state.isUserPic = false;
    },
  },
});

export default toogleSlice.reducer;
export const { openSlidebar, closeSlidebar, openModal, closeModal ,openUserModalPic,closeUserModalPic} =
  toogleSlice.actions;

export const isOpenSlidebar = (state) => state.toogle.isOpenSlidebar;
export const isModal = (state) => state.toogle.isModal;
export const userModal = (state) => state.toogle.isUserPic;
