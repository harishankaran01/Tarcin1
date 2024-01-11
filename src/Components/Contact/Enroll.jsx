import React from 'react'
import { useParams } from 'react-router-dom';
import data from "./coursesdata";


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
 
  return (
    <div>
      
      {display.name}
    </div>
  )
}
