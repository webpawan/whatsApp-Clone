import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isOpenSlidebar,
  openUserFind,
  userSearch,
} from "../../../assets/logic/features/toggleSlice";
import {
  getChats,
  getSelectedChat,
  getUser,
} from "../../../assets/logic/features/userSlice";
import MainSidebarIcons from "../sidebarIconComponents/MainSidebarIcons";

import Menu from "../sidebarIconComponents/Menu";
import MyChat from "../singleChatComponents/MyChat";
import SidebarFindUser from "../singleChatComponents/SidebarFindUser";
import SidebarGroup from "../sidebarGroupChat/SidebarGroup";

const SideDrawer = () => {
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const slider = useSelector(isOpenSlidebar);
  const user = useSelector(getUser);
  const isUserSearch = useSelector(userSearch);

  if (isUserSearch) {
    return (
      <div className="basis-[380px]  border-r border-r-slate-700 text-white z-10">
        <SidebarFindUser />
      </div>
    );
  }

  return (
    <>
      {slider ? (
        <div className="basis-[380px]  border-r border-r-slate-700 text-white">
          <SidebarGroup />
        </div>
      ) : (
        <div className=" basis-[380px]  border-r border-r-slate-700 z-10">
          <div className="flex items-center justify-between bg-[#202c33] py-2 pl-3">
            <div className="user h-[30px] w-[30px] bg-white rounded-full">
              <img src={user.pic} alt="" srcSet="" className="rounded-full" />
            </div>
            <div className="icons flex  items-center w-2/5 ">
              <MainSidebarIcons />
              <div className="icon text-base text-slate-400 w-2/6   mx-auto">
                <Menu />
              </div>
            </div>
          </div>
          <form className="flex   m-[5px] ml-2 w-full  items-center   mx-auto ">
            <div className=" flex  items-center w-11/12 ">
              <label
                htmlFor=""
                className=" py-[7px] px-5 bg-[#202c33] rounded-l-md  text-gray-400  text-xs "
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>

              <input
                type="text"
                placeholder="search or start new chat "
                className="w-full py-[7px]  focus:outline-none text-slate-200 bg-[#202c33] text-xs rounded-r-md"
              />
            </div>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              className="h-[18px] text-slate-400 mr-4 ml-3 "
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
          </form>
          <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5">
            <MyChat />
            <p className="text-[5px] text-slate-200  mx-auto my-2">
              <span>
                <i className="fa-solid fa-lock"></i>
              </span>{" "}
              Your personal message are{" "}
              <span className="text-sky-400 text-xs">end-to-end encrypted</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideDrawer;
