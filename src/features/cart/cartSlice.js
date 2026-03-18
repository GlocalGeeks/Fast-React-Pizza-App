import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart: [],

  cart: [],
};

const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItem(state, action) {
        //payload should need to be new item
        state.cart.push(action.payload)
    },
    deleteItem(state, action) {
        //paylload = pizzaId

        state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
        const item = state.cart.find(item => item.pizzaId === action.payload)
        item.quanity++;
        item.totalPrice =item.quanity * item.unitPrice
    },
    decreaseItemQuantity(state, action) {
        const item = state.cart.find(item => item.pizzaId === action.payload)
        item.quanity--;
        item.totalPrice =item.quanity * item.unitPrice
    },
    clearcart(state, action) {
        state.cart = []
    },
  },
});

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearcart} = cartSlice.actions
export default cartSlice.reducer

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0); 