import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
      <div className='footer'>
  
          <div className='cont cont1'>
                  <h1>TARCIN ROBOTIC LLP</h1>
                  <h4>Unlock the Tech Unleash the World <br /><br />Follow us</h4>
              <Link> <FaTwitter color='#4a99e9' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></Link>
              <Link> <FaInstagram color='#702042' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></Link>
              <Link> <FaLinkedin color='#3273af' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></Link>
              <Link> <FaFacebook color='#3976ea' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></Link><br/>
                  <button>Contact Us</button>
         </div >
          <div className='cont cont2' >
                  <h5>Tarcin Robotics LLP,</h5>

              <h5>176 East, 6th Street,</h5>

          <h5> KK-Nagar,</h5>

              <h5> Madurai-625020.</h5>
              </div>
          <div className='cont cont3'>
              <h3><FaPhoneAlt/>  +91  98846 75586</h3>
              <h3><IoMail />  contact@tarcinrobotic.in</h3>
              
              </div>
        </div>

     
  )
}
