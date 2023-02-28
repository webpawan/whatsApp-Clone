import React from "react";
import {ChatState} from '../../assets/context/ChatProvider'
import SideDrawer, {  } from "../../components/pages/SideDrawer";
import ChatBox from "../pages/ChatBox";
const Chat = () => {
const {user} = ChatState();


  return (
    <>
      <div className="flex h-screen bg-[rgb(17,27,33)] p-4">
        {user && <SideDrawer/>}
        {/* chat section -------------------------------------------------*/}
     {user && <ChatBox/>}
      </div>
    </>
  );
};

export default Chat;
