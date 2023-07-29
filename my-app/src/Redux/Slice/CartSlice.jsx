import { createSlice } from '@reduxjs/toolkit'

/* The `initialState` constant is defining the initial state of the cart in the Redux store. It has
three properties: */
const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalAmount: 0
}

/* The code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. */
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /* The `addItem` function is a reducer function that is responsible for adding an item to the cart
    in the Redux store. */
    addItem:(state, action) => {
        const newItem = action.payload
        const existingItem = state.cartItem.find((item) => item.id === newItem.id);
        state.totalQuantity++

        if(!existingItem){
            state.cartItem.push({
                id: newItem.id,
                productName: newItem.productName,
                imgUrl: newItem.imgUrl,
                quantity:1,
                totalPrice: newItem.price,
                price: newItem.price
            })
        }else{
            existingItem.quantity++
            existingItem.totalPrice =  Number(existingItem.totalPrice) + Number(newItem.price)
        }
        state.totalAmount = state.cartItem.reduce((total, item) => {
          return total + Number(item.price) * Number(item.quantity)
        }, 0)
        //console.log(state.totalQuantity)
        //console.log(newItem)
        //console.log(state.cartItem)
       
    },

   /* The `deleteItem` function is a reducer function that is responsible for deleting an item from the
   cart in the Redux store. */
   deleteItem: (state, action) => {
      const id = action.payload
      const existingItem = state.cartItem.find(item => item.id === id)

      if(existingItem){
        state.cartItem = state.cartItem.filter(item => item.id !== id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }

      state.totalAmount = state.cartItem.reduce((total, item) => {
        return total + Number(item.price) * Number(item.quantity)
      }, 0)
    }
  }
});
export const CartAction = CartSlice.actions

export default CartSlice.reducer