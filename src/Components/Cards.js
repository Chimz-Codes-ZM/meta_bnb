import React from "react";

import card1 from "../Images/Home/Frame 151.png";
import card2 from "../Images/Home/Frame 151 (1).png";
import card3 from "../Images/Home/Frame 151 (2).png";
import card4 from "../Images/Home/Frame 151 (3).png";
import card5 from "../Images/Home/Frame 151 (4).png";
import card6 from "../Images/Home/Frame 151 (5).png";
import card7 from "../Images/Home/Frame 151 (6).png";
import stars from "../Images/Home/stars.png";

function Cards() {
  return (
    <div className="cards-header">
      <div className="inspiration">
        <p>Inspiration for your next adventure</p>
      </div>
      <div className="cards">
        <div className="cards-row-1">
          <div className="card1">
            <img src={card1} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>

          <div className="card1">
            <img src={card2} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>

          <div className="card1">
            <img src={card3} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>

          <div className="card1">
            <img src={card4} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>
        </div>
      </div>

      {/* SECOND ROW OF CARDS STARTS HERE */}

      <div className="cards">
        <div className="cards-row-1">
          <div className="card1">
            <img src={card4} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>

          <div className="card1">
            <img src={card5} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>

          <div className="card1">
            <img src={card6} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>

          <div className="card1">
            <img src={card7} className="card1-img" />
            <div className="card-text">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="card-text-2">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <img src={stars} className="stars" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
