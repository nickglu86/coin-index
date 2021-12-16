import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BitcoinLogo from '../../Assets/BitcoinLogo';


const Header = () => {
     const [isOpen, setOpen] = useState("false");

    const toggleMobNav = () => {
      setOpen(!isOpen);

    };

    return ( 
        <header>
            <div className="logo">
                <figure>
                    <BitcoinLogo />
                    <figcaption>Cypto Junkies</figcaption> 
                </figure>
            </div>
          <nav className={`header-nav ${isOpen ? "" : "open"}`} onClick={toggleMobNav}> 
              <Link to="/" >Crypto Index</Link> 
              <Link to="/news">News</Link> 
              <Link to="/nft">NFT</Link> 
              {/* <Link to="/defi" data-dev="indev">DeFi</Link>  */}
              <Link to="/metrics">Metrics</Link> 
              <Link to="/invest" >Invest</Link> 
              <Link to="/learn" >Learn</Link> 
          </nav>
          <span  className={`toggle-nav ${isOpen ? "" : "open"}`} onClick={toggleMobNav} >
             <span>Toggle navigation</span>
          </span>
        </header>
     );
}
 
export default Header;