import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./Reducer/courseReducer";
import { singhleCourseReduser } from "./Reducer/courseReducer";
import { loginReducer } from "./Reducer/usersReducer";
const store = configureStore({
    reducer:{
        allCourses:courseReducer,
        singleCourse:singhleCourseReduser,
        loginUser:loginReducer,
      
    }
})

export default store;


