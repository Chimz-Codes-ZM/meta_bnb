import React from "react";
import MBToken from '../Images/Home/Group 59536.png';
import Metamask from '../Images/Home/Group 4038.png';
import openSea from '../Images/Home/logo.png';
import Metatext from '../Images/Home/metamask.png';
import opentext from '../Images/Home/OpenSea.png';


function Pagebreak() {
    return (
        <div className="page-break">
            <div className="mbtoken">
                <img src={MBToken} />
                <p>MBToken</p>
            </div>

            <div className="metamask">
                <img src={Metamask} />
                <img src={Metatext} className="metatext"/>
            </div>

            <div className="openSea">
                <img src={openSea} />
                <img src={opentext}  classname="opentext"/>
            </div>
            
        </div>
    )
}

export default Pagebreak