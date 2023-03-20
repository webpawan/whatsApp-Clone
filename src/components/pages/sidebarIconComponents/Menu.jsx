import { AnimatePresence, motion } from "framer-motion";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  openModal,
  openSlidebar,
} from "../../../assets/logic/features/toggleSlice";
const Menu = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className=" px-3 p-1 rounded-full   text-white hover:bg-slate-700/[0.6] active:bg-slate-700/[0.6] focus:outline-none   font-medium text-sm  text-center relative "
        type="button"
        onClick={() => setShow(!show)}
      >
        <i className="fa-solid fa-ellipsis-vertical text-lg text-slate-400"></i>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -100, x: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0, y: -80, x: 50 }}
              className="px-5 bg-[#233138] absolute right-5 my-2  text-left  shadow shadow-black text-slate-300 w-52 "
            >
              <p
                className="  ml-2 my-4 hover:bg-slate-700  block hover:cursor-pointer"
                onClick={() => dispatch(openSlidebar())}
              >
                New Group
              </p>
              <p className="  ml-2 my-4">New community</p>
              <p className="  ml-2 my-4">Archived</p>
              <p className="  ml-2 my-4">Started message</p>
              <p className=" ml-2 my-4">Settings</p>
              <p
                className=" ml-2 my-4 hover:bg-slate-700 hover:cursor-pointer"
                onClick={() => dispatch(openModal())}
              >
                Log Out
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence></AnimatePresence>
      </div>
    </>
  );
};

export default Menu;
