import React from 'react'
import { useNavigate } from "react-router-dom";

 const NoRouteFound = () => {
   const navigate = useNavigate()
  return (
    <div onClick={() => {navigate('/home'); alert('')}}>No Route Match</div>
  )
}
export default NoRouteFound;
