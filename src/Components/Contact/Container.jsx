import React from 'react';
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import full from "D:/React Projects/Tracinnew/src/images/full.jpg"
import app from "D:/React Projects/Tracinnew/src/images/APP.jpg";
import cloud1 from "D:/React Projects/Tracinnew/src/images/Cloud Computing.jpg";
import code from "D:/React Projects/Tracinnew/src/images/codecourses.jpg";
import pcb from "D:/React Projects/Tracinnew/src/images/PCB.png";
import robot from "D:/React Projects/Tracinnew/src/images/Robotics.jpg"
import "D:/React Projects/Tracinnew/src/index.css";
import exit from "D:/React Projects/Tracinnew/src/images/exit.png"
export default function Container() {
  return (
    <div className='landcontainer'>
      <div className='courseslink ' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-sine">
        <Link to="fullstack">
          <img src={full} />

          <h1>FULL STACK</h1>
          <div className='btncon'> <button><TiArrowRightThick size={30} /></button></div>
          </Link>
      </div >
      <div className='courseslink ' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="600"
        data-aos-easing="ease-in-sine">
        <Link to="robotics_iot">
          <img src={robot} />
          <h1 >ROBOTICS & IOT</h1>
          <div className='btncon'> <button><TiArrowRightThick size={30} /></button></div>
          </Link>
      </div>
      <div className='courseslink ' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="900"
        data-aos-easing="ease-in-sine">
        <Link to="cloud_computing">   <img src={cloud1} />
          <h1>CLOUD COMPUTING</h1>
          <div className='btncon'><button><TiArrowRightThick size={30} /></button></div>
          </Link>
      </div>
      <div className='courseslink ' data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="900"
        data-aos-easing="ease-in-sine">

        <Link to="app_development" 
        >
          <img src={app} />
          <h1>APP DEVELOPMENT</h1>
          <div className='btncon'>  <button><TiArrowRightThick size={30} /></button></div>
        </Link>
      </div>
      <div className='courseslink ' data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="600"
        data-aos-easing="ease-in-sine">
        <Link to="python_Advanced">
          <img src={code} />
          <h1>PYTHON ADVANCED</h1>
          <div className='btncon'>  <button><TiArrowRightThick size={30} /></button></div>
        </Link>
      </div>
      <div className='courseslink ' data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-sine">
        <Link to="pcb_designing">
          <img src={pcb} />
          <h1>PCB DESINGING</h1>
          <div className='btncon'>   <button><TiArrowRightThick size={30} /></button></div>
        </Link>
      </div>
    </div>
  )
}
