import React from 'react'
import { useNavigate } from "react-router-dom";

 const HomePageComponent = () => {
   const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/login')}>HomePageComponent</div>
  )
}
export default HomePageComponent;
