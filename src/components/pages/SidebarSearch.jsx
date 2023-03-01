import { motion } from 'framer-motion';
import React from 'react'
import { useDispatch } from 'react-redux';
import { closeSlidebar } from '../../assets/logic/features/toggleSlice';



const SidebarSearch = () => {
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="flex flex-col h-full "
      >
        <motion.div
          className=" bg-[#202c33] h-1/4 "
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            delay: "5",
            transition: { duration: .8 },
          }}
        >
          <p className="  mt-9 font-medium  flex items-center text-slate-200">
            <span>
              <i
                className="fa-solid fa-arrow-left mx-6"
                onClick={() => dispatch(closeSlidebar())}
              ></i>
            </span>{" "}
            Add group participants
          </p>
        </motion.div>

        <div className="input py-5 mb-3  flex justify-center ">
          <input
            type="text"
            className="bg-transparent border-b border-b-slate-700 w-[90%] placeholder:text-xs focus:outline-none text-sm"
            placeholder="Type contact name "
          />
        </div>
        <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />

        <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5">
          {/* ---------------------------- */}

          <div className=" my-2 p-1 px-2   flex items-center h-10">
            <div className="user h-[35px] w-[40px] bg-slate-500 rounded-full"></div>
            <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
              <p className="text-sm font-sans font-medium ">Pawan</p>
              <p className="text-xs text-slate-400">welcome boddy</p>
            </div>
          </div>

          {/* -------------------------- */}
          {/* ---------------------------- */}
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />

          <div className=" my-2 p-1 px-2   flex items-center h-10">
            <div className="user h-[35px] w-[40px] bg-slate-500 rounded-full"></div>
            <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
              <p className="text-sm font-sans font-medium ">Pawan</p>
              <p className="text-xs text-slate-400">welcome boddy</p>
            </div>
          </div>
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />

          {/* -------------------------- */}
        </div>
      </motion.div>
    </>
  );
}

export default SidebarSearch