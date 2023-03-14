import React from "react";
import Chat from "./components/layout/Chat";
import LogIn from "./components/signin/LogIn";
import SignIn from "./components/signin/SignIn";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence location={location} key={location.pathname}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/chat" element={<Chat />} />
          
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
