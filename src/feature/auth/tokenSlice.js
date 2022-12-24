import { createSlice } from "@reduxjs/toolkit";


const initialState = { token: ''}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers:{
        getToken: (state, action)=> ({token: action.payload})
        
    }
})
export const { getToken} = tokenSlice.actions
export default tokenSlice.reducer