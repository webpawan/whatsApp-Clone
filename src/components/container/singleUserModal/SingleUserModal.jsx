import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeInfoModal, getCount, userModal } from "../../../assets/logic/features/toggleSlice";
import { getSelectedChat } from "../../../assets/logic/features/userSlice";

const SingleUserModal = () => {
  const dispatch = useDispatch();

  const isUserModal = useSelector(userModal);
  const selectedChat = useSelector(getSelectedChat);
;
const count = useSelector(getCount);
useEffect(()=>{

},[count])

  return (
    <>
      <AnimatePresence>
        {isUserModal && (
          <motion.div
            className="rounded-sm  bg-[#1c2328] text-white z-40 w-[30%] absolute right-1 h-[96%] border-l border-l-slate-700"
            initial={{
              opacity: 0,
              x: "100%",
              transition: { ease: "linear", duration: 0.3 },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { ease: "linear", duration: 0.3 },
            }}
            exit={{
              opacity: 0,
              x: "100%",

              transition: { ease: "linear", duration: 0.3 },
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col">
              <div className="flex items-center  bg-[#202c33] py-3 px-2 ">
                <button
                  className="text-slate-400 mx-4"
                  onClick={() => dispatch(closeInfoModal())}
                >
                  <i className="fa-solid fa-xmark"></i>
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
                <img
                  src={selectedChat.users[1].pic}
                  className="rounded-full w-48 h-48"
                />
                <h1 className="mt-2 text-2xl font-normal text-slate-200">
                  {selectedChat.users[1].name}
                </h1>
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
                    <p className="text-lg mr-5">Mute notifications</p>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SingleUserModal;
