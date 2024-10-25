import React,{useState} from "react";
import { Link } from "react-router-dom";
import { logo } from "./util/Data";
const Header = () => {
    const [login,setLogin]=useState("Log_In.");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={logo}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <li><button onClick={()=>{
                login==="Log_In." ? setLogin("LogOut") : setLogin("Log_In.")
            }}>{login}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
  