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
import { getChats, getUser, setChats } from "../../../assets/logic/features/userSlice";
import LoadingSkeleton from "../loadingState/LoadingSkeleton";
import SelectedUser from "./SelectedUser";

const SidebarGroup = () => {
  const dispatch = useDispatch();
  const GroupCreate = useSelector(getGroupCreate);

  const chat = useSelector(getChats);
  const user = useSelector(getUser);
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

      const { data } = await axios.get(`/api/user?search=${search}`);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {}
  };

  const handleGroup = (userToAdd) => {
    if (selectUser.includes(userToAdd)) {
      alert("user alreay selected");
    }

    setSelectUser([...selectUser, userToAdd]);
  };

  const handleDelete = (user) => {
    setSelectUser(selectUser.filter((sel) => sel._id !== user._id));
  };

  const handleSubmit = async () =>{
console.log("hy");
   console.log(groupChatName);

if(!groupChatName){
  return alert("please selet group name");
}

try {
  const {data} = await axios.post("/api/chat/group",{
    name:groupChatName,
    users:JSON.stringify(selectUser.map((user)=>user._id))
  })
  dispatch(setChats([data,...chat]))
dispatch(closeGroupCom());
dispatch(closeSlidebar());
alert("group created");

} catch (error) {
  console.log(error);
  alert("problem with create group try once again ")
}

  }
  if (GroupCreate) {
   return (
     <AnimatePresence>
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
             transition: { duration: 0.4 },
           }}
         >
           <p className="  mt-9 font-medium  flex items-center text-slate-200">
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
               <i className="fa-solid fa-camera text-lg"></i>
             </span>
             Add Group Icon
           </div>
         </div>

         <div className="input py-5 mb-3  flex justify-center ">
           <input
             type="text"
             className="bg-transparent border-b border-b-slate-100 pb-1 w-[90%] placeholder:text-xs focus:outline-none text-sm"
             placeholder="Group Name "
             onChange={(e) => setGroupChatName(e.target.value)}
             value={groupChatName}
           />
         </div>
         <hr className="h-px w-5/6 ml-auto   border-0" />
         <div className=" relative  bg-[#111b21] mx-auto w-full h-1/4 flex justify-center items-top">
           <span
             className="bg-[#00a884] h-10 w-10 flex justify-center items-center rounded-full text-sm"
             onClick={ handleSubmit}
           >
             <i className="fa-solid fa-check"></i>
           </span>
         </div>
       </motion.div>
     </AnimatePresence>
   );
  }

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
            transition: { duration: 0.4 },
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
        {/* selected users ============================= */}
        <div
          className={
            selectUser && `py-3 mt-4 ml-4 flex flex-wrap  mr-1 overflow-y-auto`
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
            className="bg-transparent border-b border-b-slate-700 w-[90%] placeholder:text-xs focus:outline-none text-sm"
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
            searchResult.map((user,i) => {
              return (
                <div key={i}>
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
          <span className="bg-[#00a884] h-10 w-10 flex justify-center items-center rounded-full text-sm"onClick={() => dispatch(openGroupCom())}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default SidebarGroup;
