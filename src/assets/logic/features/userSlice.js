import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    
  
    
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (state) => state.user.userInfo;
