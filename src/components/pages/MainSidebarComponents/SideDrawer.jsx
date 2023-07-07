import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { motion } from "framer-motion";

const SideDrawer = () => {
  const slider = useSelector(isOpenSlidebar);
  const user = useSelector(getUser);
  const isUserSearch = useSelector(userSearch);
  const selectedChat = useSelector(getSelectedChat);
  const count = useSelector(getCount);

  const [userModal, setUserModal] = useState(false);

  useEffect(() => {}, [count]);

  if (isUserSearch) {
    return (
      <div className="basis-1/3  border-r border-r-slate-700 text-white z-10">
        <SidebarFindUser />
      </div>
    );
  }

  // yadi user khud ke phto or name dhkna chata ha sidebar ma 
  if (userModal) {
    return (
      <div className="basis-1/3  border-r border-r-slate-700 text-white">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className="flex flex-col h-full "
        >
          <motion.div
            className=" bg-[#202c33] h-1/6 relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,

              transition: { duration: 0.4, delay: "0.2" },
            }}
          >
            <p className=" absolute bottom-5 left-2 font-medium text-lg  flex items-center text-slate-200">
              <span>
                <i
                  className="fa-solid fa-arrow-left mx-6 hover:cursor-pointer"
                  onClick={() => setUserModal(false)}
                ></i>
              </span>{" "}  
              Profile
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center  mx-auto overflow-auto h-52 w-52 my-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, delay: ".5" },
            }}
          >
            <img
              src={user.pic}
              alt=""
              className="h-full w-full rounded-full"
            />
          </motion.div>

          <div className="flex flex-col px-8">
            <h5 className="text-sm  text-[#017a65]">Your name</h5>
            <h5 className="text-sm  text-slate-100 my-5">{user.name}</h5>
          </div>
        </motion.div>
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
                alt="userpic"
                className="rounded-full h-full w-full bg-center bg-cover hover:cursor-pointer"
                onClick={() => setUserModal(true)}
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
          <MyChat />
        </div>
      )}
    </>
  );
};

export default SideDrawer;
