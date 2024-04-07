import { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants"; // importing named export
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}> About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
            {/* using link, it will not reload the the whole page. it will only load the contact component */}
          </li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              if (btnName == "Login") {
                setBtnName("LogOut");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
