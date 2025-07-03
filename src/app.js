import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import COUNT from "./components/Count.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <COUNT />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
