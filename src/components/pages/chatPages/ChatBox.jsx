import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import bgImage from "../../../assets/images/bg.png";

import {
  getCount,
  getTypingFun,
  openInfoModal,
} from "../../../assets/logic/features/toggleSlice";
import {
  getSelectedChat,
  getUser,
  setSelectedChat,
} from "../../../assets/logic/features/userSlice";
import { getSenderFull } from "../../../assets/logic/LogicFunctions";
import ChatNotSelected from "../../../assets/svg/ChatNotSelected";
import SingleChat from "./singleChat/SingleChat";

const ChatBox = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const selectedChat = useSelector(getSelectedChat);
  const count = useSelector(getCount);
  const isTyping = useSelector(getTypingFun);
  useEffect(() => {}, [count]);
  if (selectedChat._id) {
    const userFull = getSenderFull(user, selectedChat.users);
   
    return (
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={
          selectedChat._id
            ? `basis-4/5  bg-cover bg-no-repeat bg-center  flex-col items-center justify-between z-10 shrink sm:flex`
            : "basis-4/5  bg-cover bg-no-repeat bg-center hidden flex-col items-center justify-between z-10 shrink sm:flex"
        }
      >
        <div className="w-full flex  items-center justify-between bg-[#202c33] py-2 px-4">
          <div
            className="flex items-center  hover:cursor-pointer"
            onClick={() => dispatch(openInfoModal())}
          >
            <span
              className="mr-3 p-2  text-slate-100 sm:hidden hover:bg-slate-600 hover:rounded-full hover:p-2 flex items-center justify-center "
              onClick={() => dispatch(setSelectedChat({}))}
            >
              <i className="fa-solid fa-arrow-left text-xs sm:text-sm"></i>
            </span>
            <div className="mr-2  h-[30px] w-[30px]  rounded-full ">
              {selectedChat.isGroupChat ? (
                <p  className="w-[30px] h-[30px] rounded-full bg-slate-400 text-slate-100 flex items-center justify-center">
                  {selectedChat.chatName.substr(0, 2)}
                </p>
              ) : (
                <img
                  src={userFull.pic}
                  className="w-[30px] h-[30px] rounded-full"
                />
              )}
            </div>
            
            <div className="h-10">
              
              {selectedChat.isGroupChat ? (
                <h2 className="text-sm   font-medium font-sans text-white mt-2">
                  {selectedChat.chatName}
                  {isTyping ? (
                    <p className="text-xs font-light">typing...</p>
                  ) : (
                    <></>
                  )}
                </h2>
              ) : (
                <h2  className="text-sm  font-medium font-sans text-white mt-2">
                  {userFull.name}
                  {isTyping ? (
                    <p className="text-xs font-light">typing...</p>
                  ) : (
                    <></>
                  )}
                </h2>
              )}
            </div>
          </div>
          <div className="menu text-white w-1/4 sm:w-1/12 flex items-center justify-around">
            <div className=" text-slate-400">
              <i className=" fa-solid  fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        {/* ------------------- */}
        <SingleChat />
      </div>
    );
  }

  return (
    <>
      <div className="basis-4/5 bg-[#222e35] bg-cover bg-no-repeat bg-center hidden flex-col items-center justify-center z-10 shrink sm:flex">
        <ChatNotSelected />
        <h1 className=" mt-10 text-3xl text-slate-100 font-light">
          WhatsApp Web
        </h1>
        <p className="block text-slate-400 mt-4 font-light text-sm">
          Send and receive message without keeping you phone online{" "}
        </p>
        <p className="block text-slate-400 mt-.5 font-light text-sm">
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time
        </p>
        <p className="block text-slate-500 font-extralight absolute bottom-12 text-sm">
          {" "}
          <span className="text-xs ">
            <i className="fa-solid fa-lock"></i>
          </span>{" "}
          End-to-end encrypted
        </p>
      </div>
    </>
  );
};

export default ChatBox;
