import React from "react";
import Chat from "./components/chat/Chat";
import LogIn from "./components/signin/LogIn";
import SignIn from "./components/signin/SignIn";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence location={location} key={location.pathname}>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
