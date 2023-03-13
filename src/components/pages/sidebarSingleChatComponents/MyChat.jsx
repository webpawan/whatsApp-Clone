import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgain, isFetchAgain } from "../../../assets/logic/features/groupSlice";
import { getCount } from "../../../assets/logic/features/toggleSlice";

import {
  getChats,
  getSelectedChat,
  getUser,
  setChats,
  setSelectedChat,
} from "../../../assets/logic/features/userSlice";
import { getSender, getSenderFull, getSenderPic } from "../../../assets/logic/LogicFunctions";
import LoadingSkeleton from "../loadingState/LoadingSkeleton";

const MyChat = () => {
  const dispatch = useDispatch();

  const getselectChat = useSelector(getSelectedChat);
  const getChat = useSelector(getChats);
  const [loading, setLoading] = useState(false);
const count = useSelector(getCount)

  const fetchChat = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/chat");
      dispatch(setChats(data));
      setLoading(false);
    } catch (error) {
      console.log("erro on fetching chat");
    }
  };
  

useEffect(()=>{
  fetchChat()
},[count])
 const user = useSelector(getUser)

  return (
    <>
      {!loading ? (
        getChat.map((chat, i) => {
          // const userFull = getSenderFull(user, getselectChat.users);

          return (
            <div className="my-1" key={i}>
              <div
                className={
                  getselectChat === chat
                    ? `py-7  p-1 px-2 flex items-center h-10 bg-slate-700 hover:cursor-pointer `
                    : `py-7   p-1 px-2 flex items-center h-10 hover:cursor-pointer`
                }
                onClick={() => dispatch(setSelectedChat(chat))}
              >
                <div className=" h-10 w-12 rounded-full">
                  {!chat.isGroupChat ? (
                    <img
                      src={getSenderPic(user, chat.users)}
                      className="h-full w-full rounded-full"
                      alt=""
                    />
                  ) : (
                    <div className="flex items-center justify-center p-3 rounded-full bg-slate-500 text-white text-xs">
                      Gp
                    </div>
                  )}

                  {getselectChat.adminChat}
                </div>
                <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                  <p className="text-sm font-sans font-medium ">
                    {!chat.isGroupChat
                      ? getSender(user, chat.users)
                      : chat.chatName}
                  </p>
                  <p className="text-xs text-slate-400">welcome </p>
                </div>
              </div>

              <hr className="h-px w-5/6 ml-auto bg-slate-700  border-0" />
            </div>
          );
        })
      ) : (
        <LoadingSkeleton />
      )}
    </>
  );
};

export default MyChat;
