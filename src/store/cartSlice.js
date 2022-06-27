import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({name:'cart', initialState:{
    value:0,
},
reducers:{
   increment: (state, action) => {
    state.value = state.value + action.payload
   },
   decerement: (state) => {
    state.value--
   }
}
});



export default cartSlice;

export const cartActions= cartSlice.actions;