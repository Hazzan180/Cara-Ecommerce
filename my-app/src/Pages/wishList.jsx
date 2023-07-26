import React from 'react'
import '../Style/cart.css'

import Helment from '../Component/Helment/Helment';
import CommonSection from '../Component/UI/commonSection'
import {useSelector, useDispatch} from 'react-redux'

import { toast } from 'react-toastify';

import { CartAction } from '../Redux/Slice/CartSlice';
import {wishListAction} from '../Redux/Slice/WishListSlice'

import img from  '../assets/images/empty/wishList.png'

const wishList = () => {
  const wishList = useSelector(state => state.wishList.wishListSliceItem)
  return(
    <Helment title='WishList'>
      <CommonSection title='#WishList' sumarry='Add product to cart, checkout & SAVE upto 70%!'/>

      <section className='carts section-p1'>
        {
           wishList.length === 0 ? (
            <div className='empty'>
              <img src={img} />
              <h2>WishList is empty</h2>
            </div>
          ) : (
          <table style={{width: '100%'}}>
          <thead>
            <tr>
              <td>REMOVE</td>
              <td>IMAGE</td>
              <td>PRODUCT</td>
              <td>PRICE</td>
              <td>Add TO CART</td>
            </tr>
          </thead>
          <tbody>
            {
               wishList.map((item, index) => ( 
                <Tr item={item} key={index}/>
              ))
            }
          </tbody>
          </table>
          )
        }
      </section>
    </Helment>
  )
}

const Tr = ({item}) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(
      wishListAction.deleteItem(item.id)
    )
  }

  const addToCart = () => {
    dispatch(
      CartAction.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price
      })
    )
    deleteProduct()
    toast.success('Product added successfuly')
  }

  return <tr>
  <td>
    <span onClick={deleteProduct} className='del'>
      <i className="ri-delete-bin-line"></i>
    </span>
  </td>
  <td>
    <img src={item.imgUrl} />
  </td>
  <td>
    <span>{item.productName}</span>
  </td>
  <td>
    <span>${item.price}</span>
  </td>
  <td>
    <span className='add' onClick={addToCart}>
      <i className="ri-shopping-cart-2-line"></i>
    </span>
  </td>
</tr>

}

export default wishList