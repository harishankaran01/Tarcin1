import React from 'react';
import nexon from "D:/Tarcinweb/Tracinnew/src/images/Nexon.png";
import d3 from "D:/Tarcinweb/Tracinnew/src/images/3D-Crafts-W.png";
import "./About.css"

export default function Indpartners() {
  return (
    <div className='indpartners'>
      <h1>INDUSTRIAL PARTNERS</h1>
      <div className="partners">
        <img src={d3}/>
        <img src={nexon}/>
        
      </div>
    </div>
  )
}
