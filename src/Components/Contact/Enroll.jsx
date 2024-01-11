import React from 'react'
import { useParams } from 'react-router-dom';
import data from "./coursesdata";
import fullstack from "D:/Tarcinweb/Tracinnew/src/images/full.jpg"
import app from "D:/Tarcinweb/Tracinnew/src/images/APP.jpg";
import cloud1 from "D:/Tarcinweb/Tracinnew/src/images/Cloud Computing.jpg";
import code from "D:/Tarcinweb/Tracinnew/src/images/codecourses.jpg";
import pcb from "D:/Tarcinweb/Tracinnew/src/images/PCB.png";
import robotics_iot from "D:/Tarcinweb/Tracinnew/src/images/Robotics.jpg"

export default function Enroll() {
  let [display,setDisplay]=React.useState({});
  let params=useParams();
  React.useEffect(()=>{
      data.map(data1 => {
        if(params.name == data1.id) 
        {
          setDisplay(data1) ;
         } 
     }
      );
  },[])
  console.log(display.imageUrl);
  let image = display.imageUrl;
  return (
    <div>
      <img src={image}/>
      {display.name}
    </div>
  )
}
