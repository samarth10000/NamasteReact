import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";

const Header = () => {
  const [button, SetButton] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="submit-btn"
        onClick={() => {
          button === "login" ? SetButton("logout") : SetButton("login");
        }}
      >
        {button}{" "}
      </button>
    </div>
  );
};

export default Header;
