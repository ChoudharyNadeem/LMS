import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCourse } from './Api/Api'

function Details() {
  

  const{isLoading,singleCourse}=useSelector((state)=>state. singleCourse)
  console.log('singleCourse',singleCourse,isLoading
  
  )

  const dispatch=useDispatch()

const param=useParams()

const getSingleCourse=async()=>{
  dispatch({
    type:'requestSingleCourse'
  })

  const course=await fetchSingleCourse(param.title);
  console.log('cpurse',course.data)
  // setSingleCourse(course.data.singleCourse)
 
  dispatch({
    type:'successSingleCourse',
    payload:course.data.singleCourse
  })


 
}

useEffect(()=>{
  getSingleCourse()

},[])
const slug=singleCourse?.lessons?.length>0 && singleCourse?.lessons[0].slug


const cardicons=
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

const cardIcons=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>





  return (
    <>
    {
      !singleCourse?<p>Loading...</p>:
    
   
    <div className='deatils-wraper'>
      <div className='dails-page'>

    <h3 >{singleCourse?.title}</h3>
    <div className='dea-per' >
    <p>Lorem ipsum,  Sunt temporibus perspiciatis assumenda libero, nisi quo aspernatur eveniet veritatis fuga obcaecati iste aliquid beatae praesentium dolorem</p>
    </div>
    <div className="cardIcon">
    <span >4.5</span>
    {cardicons}
    {cardicons}
    {cardicons}
    {cardicons}
    {cardicons}
    {cardIcons} 
    <span>(4,287 raiting)</span>
    <span>24,588 students</span>

    </div>
    <p className="card-title">Created by Adnaa jain,The codex</p>
</div>
<div className='dails-card'>
<div className="card" style={{width: "18rem"}}>
  <div className="img-box">
    
  <img className="" src={singleCourse?.image?.url}alt="card potos" />
  </div>
  <div className="card-body">
   
   <p className="card-title " style={{color:"black"}}>Created by Adnaa jain,The codex</p>
    <div className="cardIcon">
    <span>4.5</span>
    {cardicons}
    {cardicons}
    {cardicons}
    {cardicons}
    {cardicons}
    {cardIcons} 
    <span>(4,287)</span>
    <i class="bi bi-android"></i>
    </div>
    <div>
    <span style={{color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>375</span>
    </div>
    <div className="startButton">
      <Link to={`/Details/${param.title}/${slug}`}>
      <button className='btn btn-primary'>Start Course</button>
      </Link>
    </div>
    <div className="hsicon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg> 
    </div>
   
  </div>
</div>

</div>
      </div>

}
</>
  )
}

export default Details
