import React from "react";
import logo1 from "../Images/Home/Navbar/logo1.png";
import PopUp from "./PopUp";
import { useState } from "react";

function Navbar() {
const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <nav>
      <img src={logo1} />
      <div className="nav-buttons">
        <div className="links">

            {/* Come back and redo anchor tags */}
          <a>Home</a>
          <a>Place to stay</a>
          <a>NFTs</a>
          <a>Community</a>
        </div>

        <div>
          <button className="connect-button" onClick={() => setButtonPopup(true)}>Connect Wallet</button>
          <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
