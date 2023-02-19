import React from "react";
import { useSelector } from "react-redux";
import Coursecard from "../../Coursecard";

const Dasboard = () => {
  const { isLoading, courses } = useSelector((state) => state.allCourses);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <div className="row">
        {courses?.map((course) => {
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
