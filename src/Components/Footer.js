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
            <a href="#">NFT</a>
            <a href="#">Tokens</a>
            <a href="#">Landlords</a>
            <a href="#">Discord</a>
        </div>
        <div className="places">
            <p style={{fontSize: '18px', lineHeight: '22px'}}><b>Places</b></p>
            <a href="#">Castle</a>
            <a href="#">Farms</a> 
            <a href="#">Beach</a>
            <a href="#">Learn more</a>
        </div>
        <div className="about-us">
            <p style={{fontSize: '18px', lineHeight: '22px'}}><b>About us</b></p>
            <a href="#">Road map</a>
            <a href="#">Creators</a>
            <a href="#">Career</a>
            <a href="#">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
