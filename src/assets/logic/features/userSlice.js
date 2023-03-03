import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  selectedChat:{},
  chats:[],
  chatName:{}
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setSelectedChat :(state,action) =>{
state.selectedChat = action.payload;
    },
    setChats:(state,action) =>{
state.chats = action.payload;
    },
    setcreateChatName:(state,action) =>{

    }
    
  },
});

export const { setUser, setSelectedChat, setChats, setcreateChatName } =
  userSlice.actions;
export default userSlice.reducer;


export const getUser = (state) => state.user.userInfo;
export const getSelectedChat = (state) => state.user.selectedChat;
export const getChats = (state) => state.user.chats;
export const getcreateChatName = (state) => state.user.chatName