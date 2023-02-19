import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { NavLink, useParams } from "react-router-dom";
import { fetchSingleCourse } from "./Api/Api";

const Session = () => {
  const [course, setCourse] = useState({});
  const [video, setVideo] = useState("");

  const { title, slug } = useParams();

  console.log(slug);
  const getSingleCourse = async () => {
    const course = await fetchSingleCourse(title);

    setCourse(course.data.singleCourse);
  };

  useEffect(() => {
    getSingleCourse();
  }, []);

  useEffect(() => {
    if (course) {
      const currentLessons = course?.lessons?.find(
        (lessons) => lessons.slug === slug
      );
      if (currentLessons) {
        setVideo(currentLessons?.link);
      }
      console.log("curetn ", currentLessons);
    }
  }, [slug]);

  return (
    <div className="player-wrappe">
      <div className="row">
        <div className="col-lg-8">
          <ReactPlayer
            className="react-player"
            url={video?.url}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-lg-4 shadow pt-4">
          <div className="lessonsContent">
            {course?.lessons?.map((lesson) => {
              return (
                <>
                  <ul>
                    <NavLink
                      style={{ textDecoration: "none" }}
                      className={lesson.slug === slug ? "active shadow" : ""}
                      class
                      to={`/Details/${title}/${lesson.slug}`}
                    >
                      {lesson.title}
                    </NavLink>
                  </ul>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
