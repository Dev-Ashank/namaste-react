import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.card?.info?.id !== itemIdToRemove);
            // state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }

});

//export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//export reducer
export default cartSlice.reducer;