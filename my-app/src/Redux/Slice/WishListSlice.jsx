import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

/* The `initialState` constant is defining the initial state of the `wishList` slice in the Redux
store. It has two properties: `wishListSliceItem` and `totalQuantity`. */
const initialState = {
    wishListSliceItem: [],
    totalQuantity: 0,
}

/* The code is creating a Redux slice called `WishListSlice` using the `createSlice` function from the
`@reduxjs/toolkit` library. */
const WishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    /* The `addItem` function is a Redux reducer that is responsible for adding an item to the
    `wishListSliceItem` array in the Redux store. */
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

   /* The `deleteItem` function is a Redux reducer that is responsible for deleting an item from the
   `wishListSliceItem` array in the Redux store. */
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