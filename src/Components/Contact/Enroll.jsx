import React from 'react'
import { useParams } from 'react-router-dom'

export default function Enroll() {
  let params=useParams();
  console.log(params)
  return (
    <div>Enroll</div>
  )
}
