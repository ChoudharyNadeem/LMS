import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { adminCourse } from "../../Api/Api";
import Coursecard from "../../Coursecard";

const Dasboard = () => {
  const [course,setCourse]=useState()

  const fetAdminCourse=async()=>{
    const res = await adminCourse()
    console.log(res)
    setCourse(res.data.course)
  }

  useEffect(()=>{
    fetAdminCourse();
  },[])

  // const { isLoading, courses } = useSelector((state) => state.allCourses);

  // if (isLoading) {
  //   return <h1>Loading....</h1>;
  // }

  return (
    <div>
      <div className="row">
        {course?.map((course) => {
          return (
            <>
              <div className="col-sm-6 mb-3  mt-3 col-md-4 col-lg-4" >
                <Coursecard course={course} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dasboard;
