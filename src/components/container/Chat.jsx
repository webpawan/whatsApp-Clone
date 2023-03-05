import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, setUser } from "../../assets/logic/features/userSlice";
import SideDrawer from "../pages/MainSidebarComponents/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import {
  isModal,
  closeModal,
  closeUserModalPic,
  userModal,
} from "../../assets/logic/features/toggleSlice";
import { AnimatePresence, motion } from "framer-motion";
import ChatBox from "../pages/chatPages/ChatBox";

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    dispatch(setUser(userInfo));
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  const logOut = () => {
    dispatch(closeModal());
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const user = useSelector(getUser);
  const Modal = useSelector(isModal);
  const userPic = useSelector(userModal);
  return (
    <>
      <div className="flex justify-center h-screen w-full bg-[rgb(17,27,33)] sm:p-4 relative">
        <AnimatePresence>
          {Modal && (
            <div className="z-30 bg-[rgba(17,27,33,0.88)] absolute w-full h-[95%]  mx-auto">
              <motion.div
                className=" rounded-sm p-5 bg-[#3b4a54] text-white z-40 w-1/3 absolute top-1/3 left-1/3  transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <p className="text-slate-200">Log out?</p>
                <p className="text-xs py-4 text-slate-200">
                  Are you sure want to log out ?
                </p>
                <div className="btn_container flex justify-end  mt-4">
                  <button
                    className="py-2 border-[.2px] border-slate-600  px-5 text-xs mx-3 rounded-sm text-[#00a884] active:bg-[#ffffff0f] -tracking-tighter font-medium hover:bg-[#ffffff0f]"
                    onClick={() => dispatch(closeModal())}
                  >
                    CANCEL
                  </button>
                  <button
                    className="py-2  bg-[#00a884] px-5 text-xs text-black font-medium rounded-sm tracking-wider hover:bg-[#00be95] active:bg-[#00be95]"
                    onClick={() => logOut()}
                  >
                    LOG OUT
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {/* ---------- log out components -------*/}

        {user && <SideDrawer />}
        {user && <ChatBox/>}

        {/* -------- big user picture component -------- */}
        <AnimatePresence>
          {userPic && (
            <motion.div
              className="rounded-sm  bg-[#1c2328] text-white z-40 w-1/3 absolute left-2/3 h-[96%] border-l border-l-slate-700"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100, scale: 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col">
                <div className="flex items-center  bg-[#202c33] py-3 px-2 ">
                  <button
                    className="text-slate-400 mx-4"
                    onClick={() => dispatch(closeUserModalPic())}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                  <p className="text-sm ml-2 text-slate-200">Contact info</p>
                </div>
                <motion.div
                  className="py-6  bg-[rgba(17,27,33,0.94)] flex flex-col items-center justify-center"
                  transition={{ delay: 0.5 }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                >
                  <img src={user.pic} className="rounded-full w-48 h-48" />
                  <h1 className="mt-2 text-2xl font-normal text-slate-200">
                    {user.name}
                  </h1>
                </motion.div>
                <div className="py-8 my-2 bg-[rgba(17,27,33,0.94)]"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <div className="rounded-sm  bg-[#0c1317] text-white z-40 absolute w-[30%]  h-[96%] border-l border-l-slate-700 right-2 overflow-y-scroll">
          <div className="flex flex-col">
            <div className="flex items-center  bg-[#202c33] py-4 px-2 fixed w-[30%]  ">
              <button
                className="text-slate-400 mx-4 text-lg"
                onClick={() => dispatch(closeUserModalPic())}
              >
                <i class="fa-solid fa-xmark"></i>
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
                src={user.pic}
                className="rounded-full w-48 h-48 bg-cover bg-center"
              />
              <h1 className="mt-2 text-2xl font-normal text-slate-200">
                {user.name}
              </h1>
              <p className="text-slate-300">group . 2 participents</p>
            </motion.div>
            <div className="py-4 px-10 my-2 bg-[rgba(17,27,33,0.94)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center w-1/2 justify-between ">
                  <span className="text-sm text-slate-400">
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p className="text-lg mr-5">Started message</p>
                </div>
                <span className="text-sm">
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </div>
              <div className="flex items-center justify-between mb-8 bg-[#111b21]">
                <div className="flex items-center w-1/2 justify-between ">
                  <span className=" text-slate-400">
                    <i class="fa-solid fa-bell"></i>
                  </span>
                  <p className="text-lg mr-2">Mute notifications</p>
                </div>
                <span className="text-sm">
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </div>{" "}
              <div className="flex items-center justify-between mb-8 ">
                <div className="flex items-top w-full justify-between ">
                  <span className="text-sm mt-[6px]  text-slate-400">
                    <i class="fa-solid fa-lock"></i>
                  </span>
                  <div className="flex flex-col m-0 p-0  ml-6">
                    <p className="text-lg  ">Encryption</p>
                    <p className="text-sm w-4/5 ">
                      Message are end-to-end encrypted. Click to learn more.
                    </p>
                  </div>
                </div>
                <span className="text-sm">
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center w-1/2 justify-between ">
                  <span className="">
                    <i class="fa-solid fa-gear  text-slate-400"></i>
                  </span>
                  <p className="text-lg mr-5">Started message</p>
                </div>
                <span className="text-sm">
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </div>
            </div>
            <div className="py-4 px-10 my-2 bg-[rgba(17,27,33,0.94)]">
              <div className="flex items-center justify-between mb-4">
                <p className="texty-sm text-slate-400">2 participants</p>
                <span className="text-xs">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5">
                <div
                  className=" py-7    flex items-center h-10 hover:bg-slate-800"
                  onClick={() =>
                    dispatch(openSlidebar(), dispatch(closeUserFind()))
                  }
                >
                  <div className=" h-[40px] w-[50px]  rounded-full bg-[#00a07d] flex items-center justify-center">
                    <span>
                      <i class="fa-solid fa-user-plus"></i>
                    </span>
                  </div>
                  <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400 ">
                    <p className="text-sm font-sans font-medium  ">
                      Add Participents
                    </p>
                  </div>
                </div>

                <div className="py-7   flex items-center  h-10 hover:bg-slate-800">
                  <div className="user flex items-center justify-center  h-[40px] w-[50px] bg-[#00a07d] rounded-full">
                    <i class="fa-solid fa-link"></i>
                  </div>

                  <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                    <p className="text-sm font-sans font-medium ">
                      Invite to group via link
                    </p>
                  </div>
                </div>

                <div className="my-1">
                  <div
                    className={`py-7   flex items-center h-10 hover:cursor-pointer `}
                  >
                    <img
                      className="user h-8 bg-slate-500 p-5 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                      <p className="text-sm font-sans font-medium ">user</p>
                      <p className="text-xs text-slate-400">welcome boddy</p>
                    </div>
                  </div>
                </div>
                <div className="my-1">
                  <div
                    className={`py-7   flex items-center h-10 hover:cursor-pointer `}
                  >
                    <img
                      className="user h-8 bg-slate-500 p-5 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                      <p className="text-sm font-sans font-medium ">user</p>
                      <p className="text-xs text-slate-400">welcome boddy</p>
                    </div>
                  </div>
                </div>
                <div className="my-1">
                  <div
                    className={`py-7   flex items-center h-10 hover:cursor-pointer `}
                  >
                    <img
                      className="user h-8 bg-slate-500 p-5 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                      <p className="text-sm font-sans font-medium ">user</p>
                      <p className="text-xs text-slate-400">welcome boddy</p>
                    </div>
                  </div>
                </div>
                <div className="my-1">
                  <div
                    className={`py-7   flex items-center h-10 hover:cursor-pointer `}
                  >
                    <img
                      className="user h-8 bg-slate-500 p-5 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                      <p className="text-sm font-sans font-medium ">user</p>
                      <p className="text-xs text-slate-400">welcome boddy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Chat;
