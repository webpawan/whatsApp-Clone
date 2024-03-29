import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeGroupCom,
  closeSlidebar,
  getGroupCreate,
  openGroupCom,
} from "../../../assets/logic/features/toggleSlice";
import { getChats, setChats } from "../../../assets/logic/features/userSlice";
import LoadingSkeleton from "../loadingState/LoadingSkeleton";
import SelectedUser from "./SelectedUser";
import { toast, ToastContainer } from "react-toastify";

const SidebarGroup = () => {
  const dispatch = useDispatch();
  const GroupCreate = useSelector(getGroupCreate);
  const chat = useSelector(getChats);
  const [groupChatName, setGroupChatName] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [selectUser, setSelectUser] = useState([]);
  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/user?search=${search}`
      );
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast.error("problem with server try again", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleGroup = (userToAdd) => {
    if (selectUser.includes(userToAdd)) {
      return toast.info("user already selected", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setSelectUser([...selectUser, userToAdd]);
  };

  const handleDelete = (user) => {
    setSelectUser(selectUser.filter((sel) => sel._id !== user._id));
  };

  const handleSubmit = async () => {
    if (!groupChatName) {
      return toast.warn("please enter group name", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    try {
      const { data } = await toast.promise(
        axios.post(
          `/api/chat/group`,
          {
            name: groupChatName,
            users: JSON.stringify(selectUser.map((user) => user._id)),
          }
        ),
        {
          pending: "Group is creating",
          success: "Group is created",
          error: "Group is not make the problem is from server",
        }
      );
      toast.success("Data loaded successfully");
      dispatch(setChats([data, ...chat]));
      dispatch(closeGroupCom());
      dispatch(closeSlidebar());
      
    } catch (error) {
      console.log(error);
      return toast.warn(
        "problem with server or something else please try again",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const nextStepforMakeGroup = () => {
    if (selectUser.length <= 1) {
      return toast.warn("select minium 2 users", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    dispatch(openGroupCom());
  };

  if (GroupCreate) {
    return (
      <>
        <ToastContainer />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            className="flex flex-col h-full "
          >
            <motion.div
              className=" bg-[#202c33] h-1/6 relative "
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                delay: "5",
                transition: { duration: 0.4 },
              }}
            >
              <p className="absolute bottom-5 font-medium  flex items-center text-slate-200 text-lg">
                <span>
                  <i
                    className="fa-solid fa-arrow-left mx-6"
                    onClick={() => dispatch(closeGroupCom())}
                  ></i>
                </span>{" "}
                New Group
              </p>
            </motion.div>

            <div className="py-5 mx-auto flex flex-col justify-center items-center text-center">
              <div className="p-10 rounded-full h-40 w-40 bg-black  flex flex-col justify-center items-center text-center text-sm font-light">
                <span>
                  <i className="fa-solid fa-camera text-lg "></i>
                </span>
                Add Group Icon
              </div>
            </div>

            <div className="input py-5 mb-3  flex justify-center ">
              <input
                type="text"
                className="bg-transparent border-b border-b-[#00a884] pb-1 w-[90%] placeholder:text-xs focus:outline-none "
                placeholder="Group Name "
                onChange={(e) => setGroupChatName(e.target.value)}
              />
            </div>
            <hr className="h-px w-5/6 ml-auto   border-0" />
            <div className=" relative  bg-[#111b21] mx-auto w-full h-1/4 flex justify-center items-top">
              <span
                className=" flex justify-center items-center  hover:cursor-pointer "
                onClick={handleSubmit}
              >
                <i className="fa-solid fa-check bg-[#00a884] p-4 rounded-full hover:cursor-pointer"></i>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="flex flex-col h-full "
      >
        <motion.div
          className=" bg-[#202c33] h-1/3 relative "
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            delay: "5",
            transition: { duration: 0.4 },
          }}
        >
          <p className="absolute bottom-5 font-medium text-lg  flex items-center text-slate-200">
            <span>
              <i
                className="fa-solid fa-arrow-left mx-6"
                onClick={() => dispatch(closeSlidebar())}
              ></i>
            </span>{" "}
            Add group participants
          </p>
        </motion.div>
        {/* selected users ============================= */}
        <div
          className={
            selectUser && `py-3 mt-4 ml-4 flex flex-wrap  mr-1 overflow-y-auto `
          }
        >
          {selectUser.map((u) => {
            return (
              <SelectedUser
                key={u._id}
                user={u}
                handleFunction={() => handleDelete(u)}
              />
            );
          })}
        </div>
        {/* ======================================== */}

        <div className="input py-5 mb-3  flex justify-center ">
          <input
            type="text"
            className="bg-transparent border-b border-b-slate-700 w-[90%] text-sm focus:outline-none text-[#00a884]"
            placeholder="Type contact name "
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />

        <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5">
          {/* ---------------------------- */}
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />

          {loading ? (
            <LoadingSkeleton />
          ) : (
            searchResult.map((user, i) => {
              return (
                <div
                  key={i}
                  className="hover:cursor-pointer  hover:bg-slate-800"
                >
                  <div
                    className=" my-2 p-1 px-2   flex items-center h-10"
                    onClick={() => handleGroup(user)}
                  >
                    <img
                      src={user.pic}
                      className="user h-[35px] w-[40px] bg-slate-500 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
                      <p className="text-sm font-sans font-medium ">
                        {user.name}
                      </p>
                      <p className="text-xs text-slate-400">welcome boddy</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />
          {/* -------------------------- */}
        </div>
        <div className=" relative  bg-[#111b21] mx-auto w-full h-1/4 flex justify-center items-top">
          <span
            className="  flex justify-center items-center  text-xl"
            onClick={nextStepforMakeGroup}
          >
            <i className="fa-solid fa-arrow-right-long bg-[#00a884] p-4 rounded-full hover:cursor-pointer"></i>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default SidebarGroup;
