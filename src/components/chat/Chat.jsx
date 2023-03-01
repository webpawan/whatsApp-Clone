import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, setUser } from "../../assets/logic/features/userSlice";
import SideDrawer from "../../components/pages/SideDrawer";
import ChatBox from "../pages/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { isModal,closeModal } from "../../assets/logic/features/toggleSlice";
import { AnimatePresence, motion } from "framer-motion";

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

  const user = useSelector(getUser);
  const Modal = useSelector(isModal);
  return (
    <>
      <div className="flex justify-center h-screen w-full bg-[rgb(17,27,33)] p-4">
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
                  <button className="py-2  bg-[#00a884] px-5 text-xs text-black font-medium rounded-sm tracking-wider hover:bg-[#00be95] active:bg-[#00be95]">
                    LOG OUT
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {user && <SideDrawer />}
        {user && <ChatBox />}
      </div>
    </>
  );
};

export default Chat;
