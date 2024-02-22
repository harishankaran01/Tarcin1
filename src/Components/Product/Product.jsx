import React from 'react';
import "/src/Pages/Products.css"
import spyter from "/src/images/Spyder.png"
import hand1 from "/src/images/hand1.png"
import hand2 from "/src/images/hand2.png"
import robots from "/src/images/robots.png"
export default function Product(props) {
  return (
 <div className='product'>
  <img src={spyter} width={"100px"}/>
  <img src={hand1} width={"100px"}/>
  <img src={hand2} width={"100px"}/>
  <img src={robots} width={"100px"}/>
  <div className='inner-content'>
    <img src={props.img}  width={"400px"}/>
    <div className='product-content'>
    <h1>{props.head}</h1>
    <p> {props.content}</p>
    </div>
  </div>
 </div>
    
  )
}
