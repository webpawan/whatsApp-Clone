import React from "react";
import Chat from "./components/chat/Chat";
import LogIn from "./components/signin/LogIn";
import SignIn from "./components/signin/SignIn";
import {Route,Routes } from "react-router-dom"
const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default App;
