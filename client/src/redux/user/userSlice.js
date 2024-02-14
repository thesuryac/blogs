import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    error:null,
    loading:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        updateStart:(state,action)=>{
            state.loading=true;
            state.error=null;
        },
        updateSuccess:(state,action)=>{
            state.currentUser= action.payload;
            state.loading = false;
            state.error = null;
        },
        updateFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        deleteUserSuccess :(state,action)=>{
            state.currentUser=null;
            state.loading=false;
            state.error = null
        },
        deleteUserFailure :(state,action)=>{
            
            state.loading=false;
            state.error = action.payload;
        },
        deleteUserStart:(state,action)=>{
            state.loading=true;
            state.error=null;
        },
        signoutSuccess:(state,action)=>{
            state.currentUser = null;
            state.error = null;
            state.loading = false;
        },
        

    }
})

export const {signInFailure,signInStart,signInSuccess,updateFailure,updateStart,updateSuccess,deleteUserFailure,deleteUserStart,deleteUserSuccess,signoutSuccess} = userSlice.actions;
export default userSlice.reducer;

