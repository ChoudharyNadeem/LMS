import { createReducer } from "@reduxjs/toolkit";

const InitialState= {
     login:null,
}


export const loginReducer = createReducer(InitialState,{

   

    successLoginUser:(state,action)=>{
        state.login=action.payload;
        state.isLoading=false
    }
})