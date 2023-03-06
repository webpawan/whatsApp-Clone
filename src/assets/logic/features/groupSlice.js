import { createSlice } from "@reduxjs/toolkit";

const initialState ={
isFetch : false
}

const groupSlice = createSlice({
  name: "groupSlice",
  initialState,
  reducers: {
    fetchAgain: (state, action) => {
      state.isFetch = false;
    },
    setFetchAgain: (state, action) => {
      state.isFetch = true;
    },
  },
});

export default groupSlice.reducer;
export const {fetchAgain,setFetchAgain} = groupSlice.actions;
export const isFetchAgain = (state) => state.group.isFetch;