import React from 'react';
import student from "D:/Tarcinweb/Tracinnew/src/images/student.png";
import "D:/Tarcinweb/Tracinnew/src/index.css"

export default function Land() {
  return (
    <div className='Land'>
      <div className='landcontant'>
        <h2 data-aos="zoom-in">Our Professional Courses</h2>
        <h4 data-aos="fade-up"
          >Replenish man have thing gathering lights

          <br />yielding shall you</h4>
      </div>
      <div className='landim'>
        <img src={student} data-aos="zoom-in-left" />
      </div>
    </div>
  )
}