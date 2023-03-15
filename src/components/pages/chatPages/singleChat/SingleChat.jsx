import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedChat,
  getUser,
} from "../../../../assets/logic/features/userSlice";
import { isLastMessage, isSameSender, isSameUser } from "./MessageLogic";
import { io } from "socket.io-client";
import { isUserTyping } from "../../../../assets/logic/features/toggleSlice";
import loadingGif from '../../../../assets/images/Reload-1s-200px.gif'

const ENDPOINT = "http://localhost:3000";
var socket, selectedChatCompare;

const SingleChat = () => {
  const dispatch = useDispatch();
  const selectdChat = useSelector(getSelectedChat);
  const user = useSelector(getUser);

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const [typing, setTyping] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);

  const fetchMessages = async () => {
    if (!selectdChat) {
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.get(`/api/message/${selectdChat._id}`);
      setMessage(data);
      setLoading(false);

      socket.emit("join chat", selectdChat._id);
    } catch (error) {
      console.log(error);
      alert("problem with fetch messagwe data");
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => dispatch(isUserTyping(true)));
    socket.on("stop typing", () => dispatch(isUserTyping(false)));
  }, []);

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectdChat;
  }, [selectdChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      setMessage([...message, newMessageRecieved]);
    });
  });

  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      socket.emit("stope typing", selectdChat._id);
      try {
        setNewMessage("");
        const { data } = await axios.post("/api/message", {
          content: newMessage,
          chatId: selectdChat._id,
        });
        socket.emit("new Message", data);
        setMessage([...message, data]);
      } catch (error) {
        console.log("erro in sendmessage function");
      }
    }
  };

  const typingHandler = (event) => {
    setNewMessage(event.target.value);

    // typing indicator logic
    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectdChat._id);
    }

    let lastTypingTime = new Date().getTime();
    var timeLenght = 3000;

    setTimeout(() => {
      var timenow = new Date().getTime();
      var timeDiff = timenow - lastTypingTime;

      if (timeDiff >= timeLenght && typing) {
        socket.emit("stop typing", selectdChat._id);
        setTyping(false);
      }
    }, timeLenght);
  };

  return (
    <>
      <div className={` h-full  text-slate-100  w-full px-5 overflow-y-auto`}>
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <img src={loadingGif} className="w-20" alt="loading image"/>
          </div>
        ) : (
          <div>
            {message &&
              message.map((m, i) => {
                const margintop = isSameUser(message, m, i, user._id);
                const isSentByCurrentUser = m.sender._id !== user._id;
                const bgColorClass = isSentByCurrentUser
                  ? "bg-[#202c33]"
                  : "bg-[#005c4b]";
                const alignClass = isSentByCurrentUser
                  ? "self-end"
                  : "self-start";
                return (
                  <div key={i} className="text-white">
                    {(isSameSender(message, m, i, user.Id) ||
                      isLastMessage(message, i, user._id)) && (
                      <div
                        className={` flex ${alignClass} ${
                          isSentByCurrentUser ? "flex-row-reverse" : "flex-row"
                        } `}
                      >
                        <img
                          src={m.sender.pic}
                          className={` w-5 rounded-full shadow-md ${bgColorClass} mb-0.5`}
                        />
                      </div>
                    )}

                    {
                      <div
                        className={` flex ${alignClass} ${
                          isSentByCurrentUser ? "flex-row-reverse" : "flex-row"
                        } sm:text-sm`}
                      >
                        <p
                          style={{ marginTop: margintop ? "2px" : "20px" }}
                          className={`max-w-xs mx-2 px-4 py-2 rounded-lg shadow-md ${bgColorClass}`}
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
      <div className="bg-[#202c33] w-full mx-auto flex items-center p-1">
        <div className="menu text-white   w-1/10  flex items-center justify-around sm:w-[10%]">
          <div className="text-xl text-slate-400">
            <i className="fa-regular fa-face-laugh"></i>
            
          </div>
          <div className="text-xl text-slate-400">
            <i className="fa-solid fa-paperclip"></i>
          </div>
        </div>

        {/* -------- */}
        <div className="flex items-center m-2 w-full rounded-md bg-slate-700 mx-auto ">
          <input
            type="text"
            placeholder="type a message"
            className="w-full  focus:outline-none bg-[#2a3942] rounded-md p-2   text-slate-200 "
            
            onChange={typingHandler}
            value={newMessage}
            onKeyDown={sendMessage}
          />
        </div>
        {/* ----------- */}
        <div className="mx-3 text-xl text-slate-400">
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>
    </>
  );
};

export default SingleChat;
