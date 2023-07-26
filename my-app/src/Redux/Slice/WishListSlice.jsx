import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    wishListSliceItem: [],
    totalQuantity: 0,
}

const WishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addItem: (state, action) =>{
        const newItem = action.payload
        const existingItem = state.wishListSliceItem.find((item) =>
        item.id === newItem.id 
        )
        state.totalQuantity++

        if(!existingItem){
            state.wishListSliceItem.push({
                id: newItem.id,
                quantity:1,
                price: newItem.price,
                imgUrl: newItem.imgUrl,
                productName: newItem.productName,
            })
            toast.success('Product added to wishList')
        }else{ 
           toast.error('Product is already in wishList')
           state.totalQuantity--
        }
        //console.log(state.totalQuantity)
    },
    deleteItem:(state, action) => {
      const id = action.payload
      const existingItem = state.wishListSliceItem.find(item => item.id === id)

      if(existingItem){
        state.wishListSliceItem = state.wishListSliceItem.filter(
          item => item.id !== id
        )
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }
    }
  }
});

export const wishListAction = WishListSlice.actions

export default WishListSlice.reducer