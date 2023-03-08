import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Community from "./pages/community/Community";
import Request from "./pages/request/Request";
import Scroll from "./components/common/scroll/Scroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Request />
  </React.StrictMode>
);
