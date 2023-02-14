import React from "react";
import metaFooter from "../Images/Home/footer/metafooter.png";
import footerFacebook from "../Images/Home/footer/facebook.png";
import footerInsta from "../Images/Home/footer/insta.png";
import footerTwitter from "../Images/Home/footer/twitter.png";
import footerCopyright from "../Images/Home/footer/copyright.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logos">
        <img src={metaFooter} />
        <div className="socials">
          <img src={footerFacebook} />
          <img src={footerInsta} />
          <img src={footerTwitter} />
        </div>
        <img src={footerCopyright} />
      </div>

      <div className="footer-content">
        <div className="community">
            <p style={{fontSize: '18px', lineHeight: '22px'}}><b>Community</b></p>
            <a>NFT</a>
            <a>Tokens</a>
            <a>Landlords</a>
            <a>Discord</a>
        </div>
        <div className="places">
            <a style={{fontSize: '18px', lineHeight: '22px'}}><b>Places</b></a>
            <a>Castle</a>
            <a>Farms</a> 
            <a>Beach</a>
            <a>Learn more</a>
        </div>
        <div className="about-us">
            <p style={{fontSize: '18px', lineHeight: '22px'}}><b>About us</b></p>
            <a>Road map</a>
            <a>Creators</a>
            <a>Career</a>
            <a>Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
