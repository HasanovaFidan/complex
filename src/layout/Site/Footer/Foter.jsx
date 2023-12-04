import React from 'react'
import { FaFacebookSquare, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";
import "./footer.css"

function Footer() {
  return (
    <div>
            <footer>
        <div className="footer__div">
  <div className="icon__div">
<div className='div'> <FaGithub/></div> 
       <div className='div'> <FaLinkedin/></div>
      <div className='div'> <FaInstagram/> </div>
       <div className='div'> <FaFacebookSquare/></div>
        <div className='div'><FaTwitter /></div>
       <div className='div'> <GiThunderball /></div>
  </div>
  <div className="h__div">
    <p>Designed&Built by</p>
    <p>Fidan Hasanova</p>
  </div>
      
        </div>
    </footer>
    </div>
  )
}

export default Footer
