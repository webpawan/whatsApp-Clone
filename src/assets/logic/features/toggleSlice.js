import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSlidebar: false,
  isModal: false,
  isUserPic: false,
  isUserSearch:false,
  isGroupCreate:false,
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
    openUserFind: (state) => {
      state.isUserSearch = true;
    },
    closeUserFind: (state) => {
      state.isUserSearch = false;
    },
    openGroupCom: (state) => {
      state.isGroupCreate = true;
    },
    closeGroupCom: (state) => {
      state.isGroupCreate = false;
    },
  },
});

export default toogleSlice.reducer;
export const { openSlidebar, closeSlidebar, openModal, closeModal ,openUserModalPic,closeUserModalPic,openUserFind,closeUserFind,openGroupCom,closeGroupCom} =
  toogleSlice.actions;

export const isOpenSlidebar = (state) => state.toogle.isOpenSlidebar;
export const isModal = (state) => state.toogle.isModal;
export const userModal = (state) => state.toogle.isUserPic;
export const userSearch = (state) => state.toogle.isUserSearch;
export const getGroupCreate = (state) => state.toogle.isGroupCreate;