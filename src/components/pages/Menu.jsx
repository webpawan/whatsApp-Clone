import { AnimatePresence, motion } from "framer-motion";

import React, { useState } from "react";
const Menu = () => {
const [show, setShow] = useState(false)


const he = () =>{
    console.log("hel");
}

  return (
    <>
      <button
        className=" w-full p-1 rounded-full   text-white hover:bg-slate-700/[0.6] focus:outline-none   font-medium text-sm  text-center relative"
        type="button"
        onClick={() => setShow(!show)}
      >
        <i className="fa-solid fa-ellipsis-vertical "></i>
        <AnimatePresence>
          {show && (
            <motion.div initial={{ scale:0}} animate={{scale:1}} exit={{opacity:0,scale:0}}  className="p-2 bg-[#202c33] absolute right-5 my-2 w-40 text-left text-slate-300 shadow shadow-black ">
              <p
                className="text-[.1px] font-medium ml-2 my-2 "
                onClick={() => he()}
              >
                New Group
              </p>
              <p className="text-[.1px] font-medium ml-2 my-2">New community</p>
              <p className="text-[.1px] font-medium ml-2 my-2">Archived</p>
              <p className="text-[.1px] font-medium ml-2 my-2">
                Started message
              </p>
              <p className="text-[.1px] font-medium ml-2 my-2">Settings</p>
              <p className="text-[.1px] font-medium ml-2 my-2">Log Out</p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

export default Menu;
