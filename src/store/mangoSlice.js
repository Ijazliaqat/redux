import { createSlice } from "@reduxjs/toolkit";

const mangoSlice = createSlice({name: 'mango', 
    initialState: {name: 'bander', data:[]},
    reducers:{
        upDateName(state, action){
            state.name = action.payload
            console.log(state.name);
        } 
    }
});
 
export default mangoSlice;
export const mangoActions=mangoSlice.actions;