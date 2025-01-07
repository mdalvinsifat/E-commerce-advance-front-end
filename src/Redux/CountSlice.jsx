import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  white : JSON.parse(localStorage.getItem("white")) || [], 
};




const whiteSlice = createSlice({
  name : 'white', 
  initialState, 
  reducers:{
    addtowhitelist: (state, action) =>{
      const products = action.payload
      const existingProducts = state.white.find(items => items._id==products._Id)

      if (existingProducts) {
        existingProducts.quantity += 1;
      } else {
        state.white.push({ ...products, quantity: 1 });
      }
      localStorage.setItem('white', JSON.stringify(state.white));
    },


    removeFromWhite : (state, action ) =>{
      const updatedwhite = state.white.filter(items => items._id !== action.payload._id)
      state.white = updatedwhite;
      localStorage.setItem('white', JSON.stringify(state.white ));
    },


    clearwhite: (state) => {
      state.white = [];
      localStorage.removeItem('white');
    },

  }
})


export const { addtowhitelist, removeFromWhite, clearwhite } = whiteSlice.actions;

export const selectWhite = (state) => state.white.white;

export default whiteSlice.reducer;

