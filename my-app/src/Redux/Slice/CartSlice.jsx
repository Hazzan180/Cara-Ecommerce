import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalAmount: 0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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