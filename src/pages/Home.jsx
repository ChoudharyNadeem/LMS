import React, { useEffect, useState } from "react";
import Coursecard from "../component/Coursecard";
import { fetchAllcourse } from "../component/Api/Api";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const [error, setError] = useState(false);
  // get data  from store
  const { isLoading, courses } = useSelector((state) => state.allCourses);
  const[courseData,setCourse]=useState([])
  console.log("course", courseData, isLoading);

  const dispatch = useDispatch();

  const getAllcourse = async () => {
    dispatch({
      type: "requestAllCourse",
    });
    const res = await fetchAllcourse();
    
    if (res.data.success) {
      setCourse(res.data.course)
      dispatch({
        type: "successAllCourse",
        payload: res.data.course,
      });
    }
  };

  useEffect(() => {
    getAllcourse();
  
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    const filterData = value?courses.filter(course=>course.title?.toString().startsWith(value?.toString())):courses;
    console.log(filterData)
    setCourse(filterData)

  };

  if (isLoading) {
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
          <div className="text" data-text="Searching.."></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="back-img"></div>

      <div className="serch-bar">
        {/* <h1 className="heading" style={{color:"white"}}>Subscribe to the best of Udemy</h1> */}

        <input
          type="text"
          className="inputs-bar shadow"
         
          onChange={handleChange}
          placeholder="Search Course"
        />
       
      </div>
      <div className=" d-flex aling-items-center mt-5 justify-content-center gap-4 ">
        <div className="row">
          {courseData?.map((course) => {
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
