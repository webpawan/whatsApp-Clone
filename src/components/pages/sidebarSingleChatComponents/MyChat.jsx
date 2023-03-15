import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "../../../assets/logic/features/toggleSlice";

import {
  getChats,
  getSelectedChat,
  getUser,
  setChats,
  setSelectedChat,
} from "../../../assets/logic/features/userSlice";
import {
  getSender,
  getSenderEmail,
  getSenderPic,
} from "../../../assets/logic/LogicFunctions";
import LoadingSkeleton from "../loadingState/LoadingSkeleton";

const MyChat = () => {
  const dispatch = useDispatch();

  const getselectChat = useSelector(getSelectedChat);
  const getChat = useSelector(getChats);
  const [loading, setLoading] = useState(false);
  const count = useSelector(getCount);
  const [filterData, setFilterData] = useState(getChat);
  const [groupName, setGroupName] = useState([])
  const [userName, setUserName] = useState([])

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

  const searchUser = (query) => {
     var userName = "";
     var groupName = "";
    const searchedData = getChat.filter((userData) => {
     
      if (!userData.isGroupChat) {
        userName = getSender(user, userData.users);
        setUserName(userName)
        console.log(userName);
      }else{
       groupName = userData.chatName;
        setGroupName(groupName);

      }




      //  const data = getChat.filter((userData) => userData.userName.toLowerCase().includes(query) || userData.groupName.toLowerCase().includes(query))

    })



    setFilterData(searchedData);

  };
  useEffect(() => {
    fetchChat();
  }, [count]);
  const user = useSelector(getUser);

  return (
    <>
      {!loading ? (
        <div>
          <div className="flex   m-[5px] ml-2 w-full  items-center   mx-auto ">
            <div className=" flex  items-center w-11/12 ">
              <label
                htmlFor=""
                className=" py-[7px] px-5 bg-[#202c33] rounded-l-md  text-gray-400  "
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>

              <input
                type="text"
                placeholder="search or start new chat "
                className="w-full py-[7px]  focus:outline-none text-slate-200 bg-[#202c33] rounded-r-md"
                onChange={(e) => searchUser(e.target.value)}
              />
            </div>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              className="h-5 text-slate-400 mr-4 ml-3 "
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
              xmlSpace="preserve"
            >
              <path
                fill="currentColor"
                d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5">
            {/* <MyChat /> */}
            {getChat.map((chat, i) => {
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
                          {chat.chatName.substr(0, 2)}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                      <p className="text-lg  font-sans font- ">
                        {!chat.isGroupChat
                          ? getSender(user, chat.users)
                          : chat.chatName}
                      </p>
                      <p className="text-xs text-slate-400">
                        {!chat.isGroupChat ? (
                          "email: " + getSenderEmail(user, chat.users)
                        ) : (
                          <></>
                        )}
                      </p>
                    </div>
                  </div>

                  <hr className="h-px w-5/6 ml-auto bg-slate-700  border-0" />
                </div>
              );
            })}
            <p className="text-[5px] text-slate-200  mx-auto my-2">
              <span>
                <i className="fa-solid fa-lock"></i>
              </span>{" "}
              Your personal message are{" "}
              <span className="text-sky-400 text-xs">end-to-end encrypted</span>
            </p>
            --
          </div>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </>
  );
};

export default MyChat;
