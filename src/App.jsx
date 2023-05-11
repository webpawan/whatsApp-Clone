import React from "react";
import User from "./components/registration/User";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
const Chat = lazy(() => import("./components/layout/Chat"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence location={location} key={location.pathname}>
        <Suspense falback={<div> loading</div>}>
          <Routes>
            <Route path="/" element={<User />} exact />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};
export default App;
