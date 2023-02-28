import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ChatProvider from "./assets/context/ChatProvider";
import "./index.css";




ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ChatProvider>
      <App />
    </ChatProvider>
    
  </Router>
);
