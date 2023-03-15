import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import {
  getCount,
  isOpenSlidebar,
 
  userSearch,
} from "../../../assets/logic/features/toggleSlice";
import {

  getSelectedChat,
  getUser,
} from "../../../assets/logic/features/userSlice";
import MainSidebarIcons from "../sidebarIconComponents/MainSidebarIcons";
import SidebarGroup from "../sidebarGroupChat/SidebarGroup";
import Menu from "../sidebarIconComponents/Menu";
import SidebarFindUser from "../sidebarSingleChatComponents/SidebarFindUser";
import MyChat from "../sidebarSingleChatComponents/MyChat";

const SideDrawer = () => {
  
  const slider = useSelector(isOpenSlidebar);
  const user = useSelector(getUser);
  const isUserSearch = useSelector(userSearch);
  const selectedChat = useSelector(getSelectedChat);
  const count = useSelector(getCount);

  useEffect(() => {}, [count]);

  if (isUserSearch) {
    return (
      <div className="basis-1/3  border-r border-r-slate-700 text-white z-10">
        <SidebarFindUser />
      </div>
    );
  }

  return (
    <>
      {slider ? (
        <div className="basis-1/3  border-r border-r-slate-700 text-white">
          <SidebarGroup />
        </div>
      ) : (
        <div
          className={
            selectedChat._id
              ? `w-0 hidden  sm:basis-1/3 border-r border-r-slate-700 z-10 sm:w-full sm:block `
              : `w-full  sm:basis-1/3  border-r border-r-slate-700 z-10 `
          }
        >
          <div className="flex items-center justify-between bg-[#202c33] py-3 pl-3">
            <div className="user flex items-center h-[30px] w-[30px] bg-white rounded-full bg-center bg-cover">
              <img
                src={user.pic}
                alt=""
                srcSet=""
                className="rounded-full h-full w-full bg-center bg-cover"
              />
              <p className="mx-3 text-slate-100 sm:hidden ">{user.name}</p>
            </div>
            <div className="icons flex  items-center w-2/5 ">
              <MainSidebarIcons />
              <div className="icon text-base text-slate-400 w-2/6   mx-auto">
                <Menu />
              </div>
            </div>
          </div>
         <MyChat/>
        </div>
      )}
    </>
  );
};

export default SideDrawer;
