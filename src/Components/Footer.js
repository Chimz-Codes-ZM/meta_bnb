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
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
        </div>
        <div className="places">
            <p style={{fontSize: '18px', lineHeight: '22px'}}><b>Places</b></p>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
        </div>
        <div className="about-us">
            <p style={{fontSize: '18px', lineHeight: '22px'}}><b>About us</b></p>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
