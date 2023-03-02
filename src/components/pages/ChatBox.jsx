import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import bgImage from "../../assets/images/bg.png";
import { openUserModalPic } from '../../assets/logic/features/toggleSlice';
import { getUser } from '../../assets/logic/features/userSlice';


const ChatBox = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className=" basis-9/12  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-between z-10"
      >
        {/* ------------------- */}
        <div className="w-full flex items-center justify-between bg-[#202c33] py-2 px-4">
          <div className="flex items-center ">
            <div
              className="mr-2 user h-[30px] w-[30px]  rounded-full"
              onClick={() => dispatch(openUserModalPic())}
            >
              <img
                src={user.pic}
                className="w-[30px] h-[30px] rounded-full"
               
              />
              
            </div>
            <p className="text-sm font-medium font-sans text-white">{user.name}</p>
          </div>
          <div className="menu text-white  w-1/12 flex items-center justify-around">
            <div className="text-sm text-slate-400">
              <i className=" fa-solid  fa-magnifying-glass"></i>
            </div>
            <div className="text-sm text-slate-400 ">
              <i className="fa-solid fa-bell "></i>
            </div>
          </div>
        </div>
        {/* ------------------- */}

        <div className={` h-4/5   `}>
          <div className="flex  text-white ">
            {/* chat left  */}
            <div className="basis-1/3 mx-auto text-xs flex flex-col">
              <p className=" chat  inline-block px-5 py-1 my-2 rounded-lg mr-2 bg-[#005c4b]">
                hy hgy Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Earum aspernatur quod officia culpa omnis nemo dicta
                reprehenderit eaque architecto illo! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsa fuga dolorum eligendi
                pariatur, atque voluptatibus consectetur alias. Eos, sint
                incidunt.
              </p>
              <p className="text-xs chat  inline-block px-5 py-1 rounded-lg mr-2 bg-[#005c4b]">
                hy hgy Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Earum aspernatur quod officia culpa omnis nemo dicta
                reprehenderit eaque architecto illo! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsa fuga dolorum eligendi
                pariatur, atque voluptatibus consectetur alias. Eos, sint
                incidunt.
              </p>
            </div>

            {/* chat right */}

            <div className="basis-1/3 mx-auto text-sm my-2">
              <p className="my-2 text-xs chat text-right  inline-block px-5 py-1 rounded-lg ml-2 bg-[#005c4b]">
                hy hgy Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Earum aspernatur quod officia culpa omnis nemo dicta
                reprehenderit eaque architecto illo!
              </p>
              <p className="text-xs chat text-right  inline-block px-5 py-1 rounded-lg ml-2 bg-[#005c4b]">
                hy hgy Lorem, !
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------- */}
        <div className="bg-[#202c33] w-full mx-auto flex items-center">
          <div className="menu text-white  w-1/12 flex items-center justify-around">
            <div className="text-sm text-slate-400">
              <i className="fa-regular fa-face-laugh"></i>
            </div>
            <div className="text-sm text-slate-400">
              <i className="fa-solid fa-paperclip"></i>
            </div>
          </div>

          {/* -------- */}
          <form className="flex items-center m-2 w-full rounded-md bg-slate-700 mx-auto ">
            <input
              type="text"
              placeholder="search"
              className="w-full  focus:outline-none bg-[#2a3942] rounded-md p-1 px-2 text-sm text-slate-200"
            />
          </form>
          {/* ----------- */}
          <div className="mx-3 text-slate-400">
            <i className="fa-solid fa-microphone"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBox