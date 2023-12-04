import React from 'react'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaCcMastercard, FaCcPaypal, FaGooglePlusG, FaPinterestP } from "react-icons/fa";
import { LiaCcAmex, LiaCcDiscover, LiaCcVisa } from "react-icons/lia";

import "./footer.css"
function Footer() {
  return (
    <div>
    <div className="footer">
      <div className="footer-section">
          <h4>Fedan.</h4>
          <ul>
              <li>184 Main Rd E, St Albans
VIC 3021, Australia</li>
              <li>contact@company.com</li>
              <li>+055 813 86 89</li>
          </ul>
      </div>
      
      <div className="footer-section">
          <h5>HELP & INFORMATION</h5>
          <ul>
              <li>Track Order</li>
              <li>Premier Delivery</li>
              <li>Student Discount</li>
          </ul>
      </div>

      <div className="footer-section">
          <h5>ABOUT</h5>
          <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Coporate</li>
              <li>Investors</li>
          </ul>
      </div>

      <div className="footer-section">
          <h5>ONLINE SHOP</h5>
          <ul>
              <li>Shoes</li>
              <li>Bags</li>
              <li>Wallets</li>
              <li>Belts</li>
          </ul>
      </div>
  </div>
  <div className='end'>
    <div className="one__div">
      <p>Copyright © 2023 Magento, Inc. All rights reserved.</p>
    </div>
    <div className="two__div">
    <IoLogoInstagram />
    <FaGooglePlusG/>
    <FaPinterestP />

    </div>
    <div className="three__div">
    <LiaCcVisa/>
    <FaCcPaypal />
    <FaCcMastercard />
    <LiaCcDiscover />
    <LiaCcAmex/>
    </div>

  </div>
  </div>
  )
}

export default Footer
