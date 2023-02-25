import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Home}=props
    const Navigate = useNavigate();
    useEffect(()=>{
    let login = localStorage.getItem("token");
    alert("token")
    if(!login){
        Navigate("/signup")
    }
    })
    
  return (
    <div>
      <Home/>
    </div>
  )
}

export default Protected
