import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  closeGroupUserModal,
  getCount,
  getGroupUserModal,
} from "../../../assets/logic/features/toggleSlice";
import {
  getSelectedChat,
  getUser,
  setSelectedChat,
} from "../../../assets/logic/features/userSlice";
import LoadingSkeleton from "../../pages/loadingState/LoadingSkeleton";

const GroupModalSidebar = () => {
  const dispatch = useDispatch();
  const groupModal = useSelector(getGroupUserModal);
  const selectChat = useSelector(getSelectedChat);
  const user = useSelector(getUser);

  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const countRefresh = useSelector(getCount);

  useEffect(()=>{

  },[countRefresh,selectChat])
  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/user?search=${search}`
      );
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
      return alert("problem ith searc user");
    }
  };
  const handleAddUser = async (AddUser) => {
    if (selectChat.users.find((u) => u._id === AddUser._id)) {
      return alert("user alery in group");
    }
    if (selectChat.groupAdmin._id !== user._id ) {
      return alert("only admin can add someone");
    }

    try {
      setLoading(true);
      const { data } = await axios.put(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/chat/groupAdd`,
        {
          chatId: selectChat._id,
          userId: AddUser._id,
        }
      );
      dispatch(setSelectedChat(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("problem with add user problem");
    }
  };


  return (
    <>
      <AnimatePresence>
        {groupModal && (
          <motion.div className=" bg-slate-900 bg-opacity-60 absolute text-light z-[50] w-full h-[95%] o  flex items-end justify-center ">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { ease: "linear", duration: 0.2 },
              }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: { ease: "linear", duration: 0.2 },
              }}
              className="w-[28%] h-[95%]   bg-[#111b21] flex flex-col "
            >
              <div className="flex items-center  bg-[#202c33] py-4 px-4 ">
                <button
                  className="text-slate-400 mx-4 sm:text-xl"
                  onClick={() => dispatch(closeGroupUserModal())}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <p className=" ml-2 mx-2 text-slate-200 sm:text-lg ">
                  {" "}
                  Add participants
                </p>
              </div>
              {/* ----------- */}
              <div className="flex   m-2 w-full justify-center  items-center   mx-auto ">
                
                <div className=" flex  items-center w-11/12 ">
                  <label
                    htmlFor=""
                    className=" py-2 px-5 bg-[#202c33] rounded-l-md  text-gray-400  text-xs sm:text-sm "
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </label>

                  <input
                    type="text"
                    placeholder="search or start new chat "
                    className="w-full py-2  focus:outline-none text-slate-200 bg-[#202c33] text-xs sm:text-sm rounded-r-md"
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-14 overflow-y-scroll">
                <h1 className="font-extralight text-lg mb-5 mx-7 text-[#028069]">
                  CONTACTS
                </h1>
                {/* ================================= */}
                <div>
                  <hr className="h-px w-3/4 ml-auto bg-slate-700  border-0" />
                  <div className="my-1 mx-10">
                    {loading ? (
                      <LoadingSkeleton />
                    ) : (
                      searchResult.map((user, i) => {
                        return (
                          <div
                            className={`py-7   p-1 px-2 flex items-center h-10 hover:cursor-pointer`}
                            key={i}
                            onClick={() => handleAddUser(user)}
                          >
                            <div className="h-8 w-10  rounded-full">
                              <div className="h-9 w-9 bg-cover bg-center">
                                <img
                                  src={user.pic}
                                  className="h-full w-full rounded-full bg-slate-600 bg-cover bg-center"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                              <p className="text-sm font-sans font-medium ">
                                {user.name}
                              </p>
                              <p className="text-xs text-slate-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* --------------------------- */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GroupModalSidebar;
