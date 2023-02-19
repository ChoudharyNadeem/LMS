import React, { useEffect, useState } from "react";
import Coursecard from "../component/Coursecard";
import { fetchAllcourse } from "../component/Api/Api";
import { useDispatch,useSelector } from "react-redux";
function Home() {

const [error,setError]=useState(false);
// get data  from store
const {isLoading,courses}=useSelector((state)=>state.allCourses);
console.log("course",courses,isLoading)

const  dispatch=useDispatch()



  const getAllcourse = async () => {
    
    dispatch({
      type:'requestAllCourse'
    })
    const res = await fetchAllcourse();
    console.log(res.data.course);
    if (res.data.success) {
     
      dispatch({
        type:'successAllCourse',
        payload:res.data.course
      })

    }
  };

  useEffect(() => {
    getAllcourse();
  }, []);

  const handleChange=(event)=>{
    const {value}=event.target
    if(event.target.value==="mern"){
      setError(true);
      return
    }else{
setError(false)
    }

 
   
  }

if(isLoading){
  return (
    <div className=" d-flex aling-items-center mt-5 justify-content-center ">

    
    <div id="wifi-loader">
    <svg className="circle-outer" viewBox="0 0 86 86">
        <circle className="back" cx="43" cy="43" r="40"></circle>
        <circle className="front" cx="43" cy="43" r="40"></circle>
        <circle className="new" cx="43" cy="43" r="40"></circle>
    </svg>
    <svg className="circle-middle" viewBox="0 0 60 60">
        <circle className="back" cx="30" cy="30" r="27"></circle>
        <circle className="front" cx="30" cy="30" r="27"></circle>
    </svg>
    <svg className="circle-inner" viewBox="0 0 34 34">
        <circle className="back" cx="17" cy="17" r="14"></circle>
        <circle className="front" cx="17" cy="17" r="14"></circle>
    </svg>
    <div className="text"  data-text="Searching.."></div>
</div>
</div>
  )
}


  return (
    <>
    <div className="back-img"></div>
    
    <div className="input-search ">
    {/* <h1 className="heading" style={{color:"white"}}>Subscribe to the best of Udemy</h1> */}

    <input type="text" className="shadow"style={{borderRadius:'10px'}} onChange={handleChange} placeholder="Search Course" /> 
  {error &&   <p>Capital me dal😉 </p>}
    
    </div>
    <div className=" d-flex aling-items-center mt-5 justify-content-center gap-4 ">
     
      <div className="row">
        {courses?.map((course) => {
          return (
            <>
              <div className="col-sm-6 mb-4 col-md-4 col-lg-4 ">
             
              
                <Coursecard course={course} />
              </div>
            </>
          );
        })}
      </div>
    </div>
        </>
  );
}

export default Home;
