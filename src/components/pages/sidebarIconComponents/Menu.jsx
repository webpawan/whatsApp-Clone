import { AnimatePresence, motion } from "framer-motion";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  openModal,
  openSlidebar,
} from "../../../assets/logic/features/toggleSlice";
const Menu = () => {
  const [show, setShow] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className=" px-3 p-1 rounded-full   text-white hover:bg-slate-700/[0.6] active:bg-slate-700/[0.6]focus:outline-none   font-medium text-sm  text-center relative"
        type="button"
        onClick={() => setShow(!show)}
      >
        <i className="fa-solid fa-ellipsis-vertical "></i>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -100, x: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0, y: -80, x: 50 }}
              className="p-2 bg-[#202c33] absolute right-5 my-2 w-40 text-left text-slate-300 shadow shadow-black "
            >
              <p
                className="text-[.1px] font-medium ml-2 my-2 active:bg-slate-700 "
                onClick={() => dispatch(openSlidebar())}
              >
                New Group
              </p>
              <p className="text-[.1px] font-medium ml-2 my-2">New community</p>
              <p className="text-[.1px] font-medium ml-2 my-2">Archived</p>
              <p className="text-[.1px] font-medium ml-2 my-2">
                Started message
              </p>
              <p className="text-[.1px] font-medium ml-2 my-2">Settings</p>
              <p
                className="text-[.1px] font-medium ml-2 my-2"
                onClick={() => dispatch(openModal())}
              >
                Log Out
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence></AnimatePresence>
      </button>
    </>
  );
};

export default Menu;
