import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Component}=props
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
      <Component/>
    </div>
  )
}

export default Protected
