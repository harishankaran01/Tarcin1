import React from 'react';
import "./Intro.css"
import tarcin from "../images/TarcinGif.gif"
export default function Intro() {
  return (
    <div className=" intro"  >
      
    
      <div className="icontent" data-aos="fade-up">
      <h2>Tarcin Robotics is the Future of Indian Robots! We empower in the field of teaching robots by educating the students of K-College students with our learning platforms.</h2>
     <p>Do you want to step in to the future before others. Let's Build Something
amazing with Tarcin.</p>
     <div className="btns">
      <button className='product_btn'>WATCH THE VIDEO</button>
      <button className='contact_btn'>CONTACT</button>
     </div>
     </div>
      <div className='iimg' data-aos="fade-up">
        <img src={tarcin} alt="Tarcin Robotic" />
      </div>
        

    </div>
  )
}
