import { createSlice } from "@reduxjs/toolkit";

const initialState ={
isFetch : false
}

const groupSlice = createSlice({
  name: "groupSlice",
  initialState,
  reducers: {
    fetchAgain: (state, action) => {},
    setFetchAgain: (state, action) => {},
  },
});

export default groupSlice.reducer;
export const {fetchAgain,setFetchAgain} = groupSlice.actions;