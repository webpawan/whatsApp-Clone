import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getSelectedChat, getUser } from "../../../../assets/logic/features/userSlice";
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from "./MessageLogic";
const SingleChat = () => {
const selectdChat = useSelector(getSelectedChat);
const user = useSelector(getUser);

  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();

const fetchMessages = async () =>{
  if(!selectdChat){
    return
  }


  try {
    setLoading(true)
    const {data} = await axios.get(`/api/message/${selectdChat._id}`)
    setMessage(data)
    setLoading(false)
  } catch (error) {
    console.log(error)
    alert("problem with fetch messagwe data");
  }
}


  const sendMessage = async (event) => {
    // event.preventDefault();
if(event.key === "Enter" && newMessage){
  
  try {
    setNewMessage("");
    const {data} = await axios.post("/api/message",{
      content:newMessage,
      chatId:selectdChat._id
    })
    console.log(data);
    setMessage([...message,data])
  } catch (error) {
    console.log("erro in sendmessage function");
  }
}
  };

  const typingHandler = (event) => {
    setNewMessage(event.target.value);

    // typing indicator logic 
  };

  useEffect(()=>{
    fetchMessages()
  },[selectdChat])
  return (
    <>
      <div className={` h-full  text-slate-100  w-full px-5 overflow-y-auto`}>
        {loading ? (
          <h1>load</h1>
        ) : (
          <div>
          {message && message.map((m,i)=>{
            const marginLeft = isSameSenderMargin(message, m, i, user._id);
             // give margin
            const margintop = isSameUser(message, m, i, user._id); 
            //true || false isme true ha 3px barna 10px ayga

return (
  <div key={i} className="text-white">
    {(isSameSender(message, m, i, user.Id) ||
      isLastMessage(message, i, user._id)) && (
      <p className="   rounded-full   "></p>
    )}
    {
      <div className=" relative sm:text-sm w-full ">
        <p
          style={{ marginTop: margintop ? "2px" : "30px" }}
          className={
            marginLeft === "justify-end"
              ? ` absolute top-0 right-1  inline-block bg-[#202c33] p-2 rounded-b-md rounded-tr-md `
              : `bg-[#005c4b] top-0 left-1 inline-block  p-2  justify-end text-right rounded-b-md rounded-tl-m`
          }
        >
          {m.content}
        </p>
      </div>
    }
   
  </div>
);
          })}
          </div>
        )}
      </div>
      <div className="bg-[#202c33] w-full mx-auto flex items-center">
        <div className="menu text-white  w-1/10  flex items-center justify-around sm:w-1/12">
          <div className="text-sm text-slate-400">
            <i className="fa-regular fa-face-laugh"></i>
          </div>
          <div className="text-sm text-slate-400">
            <i className="fa-solid fa-paperclip"></i>
          </div>
        </div>

        {/* -------- */}
        <div className="flex items-center m-2 w-full rounded-md bg-slate-700 mx-auto">
          <input
            type="text"
            placeholder="search"
            className="w-full  focus:outline-none bg-[#2a3942] rounded-md p-1 px-2 text-sm text-slate-200"
            onChange={typingHandler}
            value={newMessage}
            onKeyDown={sendMessage}
          />
        </div>
        {/* ----------- */}
        <div className="mx-3 text-slate-400">
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>
    </>
  );
};

export default SingleChat;
