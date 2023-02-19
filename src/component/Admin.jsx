import React, { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import {  NavLink, Outlet } from 'react-router-dom'
import { sidebarRoute } from '../datasource/navlinks'
import { FaBars } from 'react-icons/fa'
import { BiSearch} from 'react-icons/bi'


const Admin = ({children}) => {
 const[isOpen,setIsOpen]=useState(false)

 const toggle =()=> setIsOpen(!isOpen)
 const inputAnimation  ={
 hidden:{
  width:0,
  padding:0,
  opacity:0,

  },
 show: {
    width:'140px',
    padding:"5px 15px",
    opacity:1,
    
  },
  transition:{
    duration:0.2,

  },
 };
 const showAnimation  ={
 hidden:{
  width:0,
 opacity:0,
 transition:{
  duration:0.5,

},

  },
 show: {
    width:'auto',

    opacity:1,
    
  },
  transition:{
    duration:0.2,

  },
 };


  return (
    <div className='Main-container d-flex gap-4'>
        <motion.div 
        animate={{width:isOpen? "200px":"40px" , transition:{
          duration:0.5,
          type:'spring',
          damping:11,
        }}}
         className="sidebar">
          <div className="top-section">
            {isOpen && <motion.h1 
             variants={showAnimation } 
             initial="hidden"
             animate="show"
             exit='hidden'
            className="logo">Lerning_MS</motion.h1>}
            <div className="bars" >
              <FaBars style={{color:'white'}} onClick={toggle}/>
            </div>
            
          </div>
          <div className="search">
            <div className="search-icon">
              <BiSearch style={{color:'white'}}/>
            </div>
           <AnimatePresence>
           {isOpen && <motion.input 
           initial='hidden'
           animate="show"
           exit="hidden"  
           variants={inputAnimation}  
            placeholder='Search..'/>}
           </AnimatePresence>
          </div>
          <section className="routes">
            {sidebarRoute.map((routes)=>(
              
 <NavLink to={routes.path} key={routes.title} className="link" >
  <div  className="icon">
    {routes.icon  }
  </div>
 <AnimatePresence>
 <motion.div
 variants={showAnimation } 
 initial="hidden"
 animate="show"
 exit='hidden'
 className="link-text" > { isOpen &&   routes.title}</motion.div>
 </AnimatePresence>
 </NavLink> 
            ))}
          </section>
       
        </motion.div>

        <div className="rightoutlet">
     
       <Outlet/>
        </div>
      
    </div>
  )
}

export default Admin
