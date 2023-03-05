import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgain } from "../../../assets/logic/features/groupSlice";

import {
  getChats,
  getSelectedChat,
  getUser,
  setChats,
  setcreateChatName,
  setSelectedChat,
} from "../../../assets/logic/features/userSlice";
import LoadingSkeleton from "../loadingState/LoadingSkeleton";

const MyChat = () => {
  const dispatch = useDispatch();

  const getselectChat = useSelector(getSelectedChat);
  const getChat = useSelector(getChats);
  const [loading, setLoading] = useState(false);

  useState(() => {
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
    fetchChat();
    dispatch(fetchAgain())
  }, [dispatch]);

  return (
    <>
      {!loading ? (
        getChat.map((chat, i) => {
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
                <div className="h-8 w-10  rounded-full">
                  <img src={chat.users[1].pic} className="h-full w-full rounded-full" alt="" />
                </div>
                <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                  <p className="text-sm font-sans font-medium ">
                    {!chat.isGroupChat ? chat.users[1].name : chat.chatName}
                    {/* {!chat.isGroupChat ? getSender(chat.users) : chat.chatName} */}
                    {/* ya condition me bug a  raha  */}
                  </p>
                  <p className="text-xs text-slate-400">welcome boddy</p>
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
