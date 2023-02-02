import React from "react";
import Hero from "../Images/Home/Group 4028.png";

function Section() {
  return (
    <div className="main-border">
      <div className="hero-text">
        <p className="hero-text1">
          Rent a Place away from Home in the Metaverse
        </p>
        <p className="provide">
          we provide you access to luxury and affordable houses
          <br /> in the metaverse, get a chance to turn your
          <br /> imagination to reality at your comfort zone
        </p>
        <div>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for location"
          ></input>
          <input type="submit" value="Search" className="search"></input>
        </div>
      </div>
      <div>
        <img src={Hero} />
      </div>
    </div>
  );
}

export default Section;
