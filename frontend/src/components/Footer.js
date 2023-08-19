import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div flex flex-col">
            <h4 className="text-orange font-semibold text-lg pt-2">INFORMATION</h4>
            <a href="/aboutus" className="text-white hover:text-gray-400 pt-2">About Us</a>
            <a href="/ayurveda" className="text-white hover:text-gray-400 pt-2">What is Ayurveda</a>
          </div>

          <div className="sb_footer-links_div">
            <h4 className="text-orange font-semibold text-2xl">CUSTOMER SERVICES</h4>
            <a href="/contactus" className="text-white hover:text-gray-400">Contact Us</a>
          </div>

          <div className="sb_footer-links_div">
            <h4 className="text-orange font-semibold text-2xl">OUICK SHOP</h4>
            <a href="/signin" className="text-white hover:text-gray-400 pt-3">
                Sign In
            </a>

            <a href="/signup" className="text-white hover:text-gray-400 pt-3">
                Sign Up
            </a>

            <a href="/cart" className="text-white hover:text-gray-400 pt-3" >
                Cart
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4 className="text-orange font-semibold text-3xl">Contact Us</h4>
            <p className="text-3xl">Pune, Maharashtra</p>
            <p className="text-3xl">+91 8668 9422 49</p>
            <p className="text-3xl">info@ayurvedamart.com</p>
          </div>

          <div className="sb_footer-links_div">
            <h4>SOCIAL MEDIA LINKS</h4>
            <div className="socialmedia">
                <p><img src="./images/instagram.png"></img></p>
                <p><img src="./images/gmail.png"/></p>
                <p><img src="./images/twitter.png"/></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} . ALL right reserved.
                </p>
            </div>

            <div className="sb_footer-below">
                
            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
