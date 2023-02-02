import React from "react";
import SecondHero from "../Images/Home/secondHero.png";


function Section3() {
  return (
    <div className="section-3">
      <div className="section-3-text">
        <h3>Metabnb NFTs</h3>
        <p>
          Discover our NFT gift cards collection. Loyal <br />
          customers gets amazing gift cards which are <br />
          traded as NFTs. These NFTs gives our cutomer
          <br /> access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </div>
        
      <div className="secondHero">
<img src={SecondHero}/>
      </div>
    </div>
  );
}

export default Section3;
