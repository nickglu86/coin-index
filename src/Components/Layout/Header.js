import React, { useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Assets/coinindex-logo.png";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
  const [isOpen, setOpen] = useState("false");

  const toggleMobNav = () => {
    setOpen(!isOpen);
  }
    return (
      <header>
        <div className="logo">
          <figure>
            <img src={Logo} />
            <figcaption>Coin Index</figcaption>
          </figure>
          <ThemeChanger />
        </div>

        <nav
          className={`header-nav ${isOpen ? "" : "open"}`}
          onClick={toggleMobNav}
        >
          <Link to="/">Home</Link>
          <Link to="/index">Crypto Chart</Link>
          <Link to="/news">News</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/developers">Developers</Link>
        </nav>

        <span
          className={`toggle-nav ${isOpen ? "" : "open"}`}
          onClick={toggleMobNav}
        >
          <span>Toggle navigation</span>
        </span>
      </header>
    );
  };
 

export default Header;
