import React from 'react'
import { useDispatch } from 'react-redux';
import bgImage from "../../assets/images/bg.png";
import { openUserModalPic } from '../../assets/logic/features/toggleSlice';


const ChatBox = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className=" basis-9/12  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-between z-10"
      >
        {/* ------------------- */}
        <div className="w-full flex items-center justify-between bg-[#202c33] py-2 px-4">
          <div className="flex items-center ">
            <div className="mr-2 user h-[30px] w-[30px]  rounded-full" onClick={()=> dispatch(openUserModalPic())}>
              <svg
                viewBox="0 0 212 212"
                preserveAspectRatio="xMidYMid meet"
                className="w-[30px] h-[30px] "
                version="1.1"
                x="0px"
                y="0px"
                xmlSpace="preserve"
              >
                <path
                  fill="#DFE5E7"
                  className="background"
                  d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"
                ></path>
                <g>
                  <path
                    fill="#FFFFFF"
                    className="primary"
                    d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"
                  ></path>
                  <path
                    fill="#FFFFFF"
                    className="primary"
                    d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-sm font-medium font-sans text-white">Pawan</p>
          </div>
          <div className="menu text-white flex w-1/12 flex items-center justify-around">
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
          <div className="menu text-white flex w-1/12 flex items-center justify-around">
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