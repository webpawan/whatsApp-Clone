import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeUserFind,
  getCount,
  openSlidebar,
  renderComByCount,
} from "../../../assets/logic/features/toggleSlice";
import axios from "axios";
import LoadingSkeleton from "../loadingState/LoadingSkeleton";
import UserListItem from "./UserListItem";
import { useNavigate } from "react-router-dom";
import {
  getChats,
  setChats,
  setSelectedChat,
} from "../../../assets/logic/features/userSlice";
const SidebarFindUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const count = useSelector(getCount);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState();
  const [loadingchat, setLoadingchat] = useState(false);

  const getChat = useSelector(getChats);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) {
      alert("please enter someting ");
    }

    try {
      setLoading(true);
      const { data } = await axios.get(`/api/user?search=${search}`);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      alert("faild to load api");
      console.log(error);
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingchat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(`/api/chat`, { userId });
      // if(!getChat.find((c)=>c._id === data._id)) dispatch(setChats([data,...chats]))

      
      setLoadingchat(false);
      dispatch(setSelectedChat(data));
      dispatch(closeUserFind());
    } catch (error) {
      alert("problem with select chat try once again");
    }
  };


  useEffect(()=>{

  },[count])
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
                onClick={() => dispatch(closeUserFind())}
              ></i>
            </span>{" "}
            New chat
          </p>
        </motion.div>
        <div className="flex   m-[5px] ml-2 w-full  items-center   mx-auto ">
          {/* <button onClick={() => dispatch(renderComByCount())}>
            increment
          </button> */}
          <div className=" flex  items-center w-[95%] ">
            <button
              htmlFor=""
              className=" py-[7px] px-5 bg-[#202c33] rounded-l-md  text-gray-400  text-xs "
              onClick={(e) => handleSearch(e)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <input
              type="text"
              placeholder="search or start new chat "
              className="w-full py-[7px]  focus:outline-none text-slate-200 bg-[#202c33] text-xs rounded-r-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />

        <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5">
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />
          <div
            className=" py-7 p-1 px-2   flex items-center h-10 hover:bg-slate-800"
            onClick={() => dispatch(openSlidebar(), dispatch(closeUserFind()))}
          >
            <div className=" h-[40px] w-[50px]  rounded-full bg-[#00a07d] flex items-center justify-center">
              <svg
                viewBox="0 0 28 28"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                className="w-7"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2146 12.1436C19.2257 12.2242 19.2405 12.3027 19.2587 12.38C19.2678 12.4192 19.2777 12.4573 19.2885 12.4942C19.3098 12.5695 19.3347 12.6435 19.3631 12.7161C19.4049 12.8228 19.4541 12.9261 19.5103 13.0253C19.5476 13.0903 19.5878 13.1541 19.6308 13.2146C19.7592 13.3979 19.9131 13.5599 20.0872 13.6953C20.2045 13.7857 20.3297 13.8641 20.4611 13.9294C20.5619 13.979 20.6659 14.0209 20.7723 14.0549C20.8441 14.0773 20.9175 14.0964 20.9926 14.112C21.1465 14.1432 21.3029 14.159 21.4596 14.1591C22.7133 14.1591 23.7297 13.0907 23.7297 11.7727C23.7297 10.4548 22.7133 9.38636 21.4596 9.38636C21.3028 9.38593 21.1464 9.40169 20.9926 9.43343C20.9183 9.44836 20.8448 9.46743 20.7723 9.49057C20.6659 9.52417 20.5619 9.56573 20.4611 9.61493C20.1326 9.77773 19.8474 10.0232 19.6308 10.3297C19.5881 10.3913 19.5476 10.4541 19.5103 10.5202C19.4539 10.6192 19.4047 10.7226 19.3631 10.8294C19.3351 10.9011 19.3098 10.975 19.2885 11.0501C19.2776 11.0882 19.2677 11.1263 19.2587 11.1644C19.2405 11.2417 19.2257 11.3201 19.2146 11.4008C19.1807 11.6471 19.1807 11.8972 19.2146 12.1436ZM8.78544 12.1436C8.77479 12.2242 8.75955 12.3027 8.74143 12.38C8.73233 12.4192 8.72238 12.4573 8.71158 12.4942C8.69029 12.5695 8.66539 12.6435 8.63697 12.7161C8.5951 12.8228 8.54587 12.9261 8.48968 13.0253C8.45248 13.0903 8.4123 13.1541 8.36935 13.2146C8.2408 13.3978 8.08694 13.5598 7.91285 13.6953C7.79563 13.7857 7.67043 13.8641 7.53896 13.9294C7.43819 13.979 7.33419 14.0209 7.22773 14.0549C7.1559 14.0773 7.08246 14.0964 7.00743 14.112C6.85355 14.1432 6.6972 14.159 6.54049 14.1591C5.28668 14.1591 4.27027 13.0907 4.27027 11.7727C4.27027 10.4548 5.28668 9.38636 6.54049 9.38636C6.69722 9.38594 6.85362 9.4017 7.00743 9.43343C7.08177 9.44837 7.15531 9.46745 7.22773 9.49057C7.33416 9.52417 7.43817 9.56573 7.53896 9.61493C7.86749 9.77773 8.15273 10.0232 8.36935 10.3297C8.41198 10.3913 8.45248 10.4541 8.48968 10.5202C8.54608 10.6192 8.59532 10.7226 8.63697 10.8294C8.66501 10.9011 8.69027 10.975 8.71158 11.0501C8.72231 11.0882 8.73226 11.1263 8.74143 11.1644C8.75955 11.2417 8.77436 11.3201 8.78544 11.4008C8.81927 11.6471 8.81927 11.8972 8.78544 12.1436ZM25.8687 17.9655C25.8408 17.9167 25.81 17.8635 25.7724 17.8045C25.732 17.741 25.6864 17.673 25.6341 17.6005C25.5818 17.5279 25.524 17.4509 25.459 17.3715C25.3939 17.2922 25.3229 17.2106 25.2447 17.1267C24.925 16.7866 24.5597 16.4953 24.1598 16.2618C24.0335 16.187 23.8993 16.1167 23.7576 16.0498C23.7533 16.0476 23.7496 16.0464 23.7455 16.0442C22.1352 15.3489 20.3211 15.3489 18.7108 16.0442C18.6881 16.0544 18.6667 16.0657 18.6447 16.077C18.6086 16.094 18.5756 16.1133 18.5405 16.1314C18.5601 16.1428 18.5801 16.153 18.5996 16.1643C18.9985 16.3978 19.3771 16.6663 19.7312 16.9668C19.9625 17.1625 20.1826 17.3718 20.3904 17.5937C20.5189 17.7297 20.6364 17.8646 20.7437 17.9961C20.8538 18.131 20.9503 18.2568 21.0364 18.377C21.125 18.5005 21.2015 18.615 21.2698 18.7204C21.3344 18.8224 21.3891 18.9131 21.4363 18.997C21.5259 19.1507 21.5927 19.3172 21.6345 19.4912L21.652 19.6136H26V18.2273C25.9621 18.1371 25.9182 18.0496 25.8687 17.9655ZM17.5278 10.1666C17.5102 10.0398 17.487 9.91635 17.4584 9.79522C17.4442 9.73465 17.4285 9.67408 17.4115 9.61466C17.3777 9.49581 17.3386 9.38039 17.2945 9.26726C17.2289 9.09959 17.1515 8.93725 17.0631 8.78158C17.0046 8.67873 16.9415 8.57931 16.8739 8.48332C16.5346 8.00097 16.0861 7.61525 15.5691 7.36112C15.4109 7.28296 15.2473 7.21726 15.0798 7.16456C14.967 7.12913 14.8515 7.09828 14.7337 7.07428C14.4919 7.02494 14.2462 7 13.9999 7C11.9785 7 10.4324 8.62502 10.4324 10.7506C10.4324 12.8761 11.9785 14.5 13.9999 14.5C14.2462 14.5 14.4919 14.4751 14.7337 14.4257C14.8515 14.4017 14.967 14.3709 15.0798 14.3354C15.2473 14.2827 15.4109 14.217 15.5691 14.1389C16.0861 13.8847 16.5346 13.499 16.8739 13.0167C16.9414 12.9207 17.0045 12.8213 17.0631 12.7184C17.1515 12.5627 17.2289 12.4004 17.2945 12.2327C17.338 12.1196 17.3777 12.003 17.4115 11.8853C17.4285 11.8259 17.4442 11.7654 17.4584 11.7048C17.487 11.5837 17.5102 11.4602 17.5278 11.3334C17.5808 10.9465 17.5808 10.5535 17.5278 10.1666ZM20.6193 19.4555C20.5796 19.3837 20.5339 19.3049 20.4804 19.218C20.4229 19.1253 20.3569 19.0245 20.2824 18.9179C20.2078 18.8113 20.1246 18.6978 20.0322 18.5819C19.9399 18.466 19.8381 18.3444 19.7265 18.2227C19.5473 18.0258 19.3577 17.8397 19.1588 17.6654C18.8523 17.3979 18.5247 17.1587 18.1798 16.9505C17.9998 16.8416 17.8086 16.7373 17.6063 16.64C17.6008 16.6364 17.595 16.6333 17.5891 16.6307C16.6495 16.1788 15.4683 15.8636 13.9998 15.8636C12.5313 15.8636 11.3499 16.1788 10.4105 16.6307C10.3778 16.6457 10.348 16.6631 10.3161 16.6793C10.1788 16.7477 10.0469 16.8195 9.92017 16.8925C9.85146 16.9331 9.78428 16.9737 9.71862 17.0142C9.41108 17.2077 9.11765 17.4253 8.84079 17.6654C8.6418 17.8397 8.45224 18.0257 8.27305 18.2227C8.16168 18.3444 8.06003 18.4649 7.96733 18.5819C7.87464 18.6989 7.79166 18.8102 7.71709 18.9179C7.64252 19.0257 7.57668 19.1253 7.51914 19.218C7.46564 19.3049 7.42 19.3837 7.38037 19.4555C7.37666 19.4611 7.37327 19.4669 7.37021 19.4729C7.32851 19.5482 7.29455 19.6143 7.26769 19.6687C7.21397 19.7777 7.18919 19.8391 7.18919 19.8391V22H20.8108V19.8391C20.754 19.7074 20.6901 19.5793 20.6193 19.4555ZM6.35546 19.4924C6.36554 19.4066 6.39303 19.324 6.43613 19.2498C6.46975 19.1841 6.49499 19.1048 6.54734 19.013C6.60542 18.9121 6.65115 18.8226 6.71464 18.7217C6.78264 18.6152 6.85571 18.5007 6.94322 18.3795C7.03072 18.2582 7.12639 18.1301 7.23395 17.9987C7.34152 17.8672 7.45967 17.7312 7.58895 17.5929C8.08473 17.0649 8.64795 16.6085 9.26317 16.2364C9.3271 16.1978 9.393 16.1593 9.45946 16.1219C9.43069 16.1072 9.40435 16.0913 9.37449 16.0777C9.35244 16.0664 9.3304 16.055 9.30836 16.0448C8.51449 15.6871 7.65502 15.5093 6.78837 15.5235C5.92176 15.5093 5.06232 15.6871 4.26849 16.0448C4.2643 16.0471 4.26055 16.0482 4.25636 16.0505C4.11441 16.1174 3.98006 16.1876 3.85365 16.2624C3.61148 16.404 3.38154 16.5667 3.16637 16.7486C3.02676 16.8672 2.89361 16.9935 2.76751 17.1272C2.68926 17.211 2.61777 17.2926 2.55304 17.372C2.48813 17.4513 2.42972 17.5283 2.37736 17.6009C2.32501 17.6734 2.27873 17.7414 2.23828 17.8049C2.20081 17.8638 2.16532 17.9171 2.13743 17.9658C2.04497 18.1267 2 18.2276 2 18.2276V19.6136H6.34741L6.35546 19.4924Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400 ">
              <p className="text-sm font-sans font-medium  ">New Group</p>
            </div>
          </div>
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />
          <div className="py-7 p-1 px-2  flex items-center  h-10 hover:bg-slate-800">
            <div className="user flex items-center justify-center  h-[40px] w-[50px] bg-[#00a07d] rounded-full">
              <i className="fa-solid fa-user-group"></i>
            </div>

            <div className="flex flex-col ml-5  text-slate-200 w-full border-slate-400">
              <p className="text-sm font-sans font-medium ">New community</p>
            </div>
          </div>
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />
          <div className="mt-5 mb-2 px-2 p-1 ml-4 text-[#00a07d]">
            <p>contact on whatsapp</p>
          </div>
          {/* ---------------------------- */}
          <hr className="h-px w-5/6 ml-auto bg-slate-800  border-0" />

          {loading ? (
            <LoadingSkeleton />
          ) : (
            searchResult?.map((user) => {
              return (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              );
            })
          )}
          {loadingchat && <h1>loading</h1>}
          {/* -------------------------- */}
        </div>
      </motion.div>
    </>
  );
};

export default SidebarFindUser;
