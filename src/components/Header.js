import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [button, SetButton] = useState("login");

  useEffect(() => {
    console.log("updated");
  }, [button]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CartItems">Cart</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
      <button
        className="submit-btn"
        onClick={() => {
          button === "login" ? SetButton("logout") : SetButton("login");
        }}
      >
        {button}
      </button>
    </div>
  );
};

export default Header;
