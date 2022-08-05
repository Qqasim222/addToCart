import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name: 'cart',
initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
},
reducers: {
    addToCart(state, action){
        const newItem = action.payload;
        state.totalAmount = state.totalAmount + newItem.price * newItem.quantity;
        const existingItem = state.cartItems.find((item) => item.id === newItem.id );
        if(!existingItem){
            const tempProduct = {...newItem, totalQuantity: 1}
            state.cartItems.push(tempProduct);
        }else{
            // existingItem.quantity++;
            existingItem.quantity = parseInt(existingItem.quantity) + parseInt(newItem.quantity);
            // existingItem.totalPrice = parseInt(existingItem.totalPrice) + parseInt(newItem.price); 

        }
    }
}
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;