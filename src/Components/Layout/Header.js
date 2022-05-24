import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BitcoinLogo from '../../Assets/BitcoinLogo';
 
import Logo from '../../Assets/logo.png'
 
import ThemeChanger from './ThemeChanger';
 

const Header = () => {
     const [isOpen, setOpen] = useState("false");

    const toggleMobNav = () => {
      setOpen(!isOpen);

    };

    return ( 
        <header>
            <div className="logo">
                <figure>
                    {/* <BitcoinLogo /> */}
                    <img src={Logo} />
                    <figcaption>Coin Index</figcaption> 
                </figure>
                <ThemeChanger />
            </div>
          <nav className={`header-nav ${isOpen ? "" : "open"}`} onClick={toggleMobNav}> 
              <Link to="/" >Main</Link> 
              <Link to="/index">Index</Link> 
              <Link to="/news">News</Link> 
              <Link to="/explore" >Explore</Link> 
              <Link to="/developers">Developers</Link> 
          </nav>

          <span  className={`toggle-nav ${isOpen ? "" : "open"}`} onClick={toggleMobNav} >
             <span>Toggle navigation</span>
          </span>
        </header>
     );
}
 
export default Header;