import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    courses:[],
    isLoading:false,
   
}

const SingleCourseInitialState={
    singleCourse:[],
    isLoading:false
}


export const courseReducer = createReducer(initialState,{

    requestAllCourse:(state,action)=>{
        state.isLoading=true

    },
    successAllCourse:(state,action)=>{
state.courses=action.payload;
state.isLoading=false


    }


})

export const singhleCourseReduser = createReducer(SingleCourseInitialState,{

    requestSingleCourse:(state)=>{
        state.isLoading=true
    },
    successSingleCourse:(state,action)=>{
        state.singleCourse=action.payload;
        state.isLoading=false
    }


})