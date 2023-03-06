import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  closeUserFind,
  closeInfoModal,
  openSlidebar,
  userModal,
} from "../../../assets/logic/features/toggleSlice";
import {
  getSelectedChat,
  getUser,
  setSelectedChat,
} from "../../../assets/logic/features/userSlice";
import axios from "axios";
import {
  fetchAgain,
  isFetchAgain,
  setFetchAgain,
} from "../../../assets/logic/features/groupSlice";
const GroupModal = () => {
  const dispatch = useDispatch();
  const isUserModal = useSelector(userModal);
  const selectedChat = useSelector(getSelectedChat);
  const user = useSelector(getUser);

  const [groupChanName, setGroupChanName] = useState(selectedChat.chatName);
  const [search, setSearch] = useState();
  const [searchRedult, setSearchRedult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameLoading, setrenameLoading] = useState(false);
  const [editButton, setEditButton] = useState(true);
  console.log(editButton);
  // --------------

  const handleRemove = (user) => {
    console.log("hy");
  };

  const handleRename = async () => {
    if (!groupChanName) return;

    try {
      setrenameLoading(true);

      const { data } = await axios.put(`/api/chat/rename`, {
        chatId: selectedChat._id,
        chatName: groupChanName,
      });
console.log(data);
      dispatch(setSelectedChat(data));
      // dispatch(setFetchAgain())
      setrenameLoading(false);
    } catch (error) {
      setrenameLoading(false);
      console.log(error);
      return alert("problem with rename group try again");
    }
    setGroupChanName("");
  };

  return (
    <>
      <AnimatePresence>
        {isUserModal && (
          <motion.div
            className="rounded-sm  bg-[#0c1317] text-white z-40 absolute w-[30%]  h-[96%] border-l border-l-slate-700 right-2 overflow-y-scroll"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100, scale: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col">
              <div className="flex items-center  bg-[#202c33] py-4 px-2 fixed w-full ">
                <button
                  className="text-slate-400 mx-4 text-lg"
                  onClick={() => dispatch(closeInfoModal())}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <p className=" ml-2 text-slate-200">Group info</p>
              </div>
              <motion.div
                className=" mt-16 py-8  bg-[rgba(17,27,33,0.94)] flex flex-col items-center justify-center"
                transition={{ delay: 0.5 }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
              >
                <img
                  src={selectedChat.users[1].pic}
                  className="rounded-full w-48 h-48 bg-cover bg-center"
                />
                <div className="flex px-2 pb-2 pt-1 items-center ml-10">
                  <input
                    type="text"
                    className={`pb-2 pt-1 bg-transparent hover:bg-slate-700 text-2xl font-normal text-slate-200 mx-auto text-center focus:outline-none hover:bg-transparent ${
                      !editButton && "text-slate-50  "
                    }`}
                    value={groupChanName}
                    onChange={(e) => setGroupChanName(e.target.value)}
                    disabled={editButton}
                  />
                  <span
                    className={` py-2 px-3 active:bg-slate-700 hover:bg-slate-700 rounded-full active:border-2 ${
                      !editButton && "text-slate-500"
                    }`}
                    onClick={() => setEditButton(!editButton)}
                  >
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className=""></span>
                </div>
                <p className="text-slate-300">
                  Group. {selectedChat.users.length} Participents
                </p>
              </motion.div>
              <div className="py-4 px-10 my-2 bg-[rgba(17,27,33,0.94)]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center w-1/2 justify-between ">
                    <span className="text-sm text-slate-400">
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <p className="text-lg mr-5">Started message</p>
                  </div>
                  <span className="text-sm">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
                <div className="flex items-center justify-between mb-8 bg-[#111b21]">
                  <div className="flex items-center w-1/2 justify-between ">
                    <span className=" text-slate-400">
                      <i className="fa-solid fa-bell"></i>
                    </span>
                    <p className="text-lg mr-2">Mute notifications</p>
                  </div>
                  <span className="text-sm">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>{" "}
                <div className="flex items-center justify-between mb-8 ">
                  <div className="flex items-top w-full justify-between ">
                    <span className="text-sm mt-[6px]  text-slate-400">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <div className="flex flex-col m-0 p-0  ml-6">
                      <p className="text-lg  ">Encryption</p>
                      <p className="text-sm w-4/5 ">
                        Message are end-to-end encrypted. Click to learn more.
                      </p>
                    </div>
                  </div>
                  <span className="text-sm">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center w-1/2 justify-between ">
                    <span className="">
                      <i className="fa-solid fa-gear  text-slate-400"></i>
                    </span>
                    <p className="text-lg mr-5">Started message</p>
                  </div>
                  <span className="text-sm">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
              <div className="py-4  my-2 bg-[rgba(17,27,33,0.94)]">
                <div className="flex items-center justify-between mb-4  px-10">
                  <p className="texty-sm text-slate-400">2 participants</p>
                  <span className="text-xs">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
                <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5 ">
                  <div
                    className=" py-7    flex items-center h-10 hover:bg-slate-800 px-10"
                    onClick={() =>
                      dispatch(openSlidebar(), dispatch(closeUserFind()))
                    }
                  >
                    <div className=" h-[40px] w-[50px]  rounded-full bg-[#00a07d] flex items-center justify-center">
                      <span>
                        <i className="fa-solid fa-user-plus"></i>
                      </span>
                    </div>
                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400 ">
                      <p className="text-sm font-sans font-medium  ">
                        Add Participents
                      </p>
                    </div>
                  </div>

                  <div className="py-7   flex items-center  h-10 hover:bg-slate-800 px-10">
                    <div className="user flex items-center justify-center  h-[40px] w-[50px] bg-[#00a07d] rounded-full">
                      <i className="fa-solid fa-link"></i>
                    </div>

                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                      <p className="text-sm font-sans font-medium ">
                        Invite to group via link
                      </p>
                    </div>
                  </div>

                  {selectedChat.users.map((user) => {
                    return (
                      <div
                        className="my-1 group  hover:bg-slate-800 px-10"
                        key={user._id}
                        onClick={() => handleRemove(user)}
                      >
                        <div
                          className={`py-7   flex items-center h-10 hover:cursor-pointer `}
                        >
                          <img
                            src={user.pic}
                            className=" h-10 w-10 rounded-full"
                            alt=""
                          />
                          <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400 ">
                            <p className="text-sm font-sans font-medium ">
                              {user.name}
                            </p>
                            <p className="text-xs text-slate-400">
                              {user.email}
                            </p>
                          </div>
                          <span>
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="py-4  my-1 mb-8 bg-[rgba(17,27,33,0.94)]">
                <div className="flex items-center justify-start px-10  hover:bg-slate-800 h-14 ">
                  <span className="sm:text-xl font-extralight hover:cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className="text-[#b74e6d]"
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="currentColor"
                        d="M16.6,8.1l1.2-1.2l5.1,5.1l-5.1,5.1l-1.2-1.2l3-3H8.7v-1.8h10.9L16.6,8.1z M3.8,19.9h9.1 c1,0,1.8-0.8,1.8-1.8v-1.4h-1.8v1.4H3.8V5.8h9.1v1.4h1.8V5.8c0-1-0.8-1.8-1.8-1.8H3.8C2.8,4,2,4.8,2,5.8v12.4 C2,19.1,2.8,19.9,3.8,19.9z"
                      ></path>
                    </svg>
                  </span>
                  <h2 className="ml-5 text-[#b74e6d]  text-xl hover:cursor-pointer">
                    Exit group
                  </h2>
                </div>
                <div className="flex items-center justify-start px-10 hover:bg-slate-800 h-14">
                  <span className="sm:text-xl font-extralight hover:cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      className="text-[#b74e6d]"
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g id="thumb-down">
                          <path
                            fill="currentColor"
                            d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h2 className="ml-5 text-[#b74e6d]  text-xl hover:cursor-pointer">
                    Report group
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GroupModal;
