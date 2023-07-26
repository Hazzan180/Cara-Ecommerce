import React, {useEffect} from 'react'

import Helment from '../Component/Helment/Helment';
import CommonSection from '../Component/UI/commonSection'

import '../Style/cart.css'
import img from  '../assets/images/empty/empty-cart.png'

import { CartAction } from '../Redux/Slice/CartSlice';

import {useSelector, useDispatch} from 'react-redux'

import {useNavigate} from 'react-router-dom'

//const cartItems = JSON.parse(localStorage.getItem('cartItem'))

const Cart = () => {
  const cartItems= useSelector(state=> state.cart.cartItem)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const navigate = useNavigate()

  const navigateTo = () => {
    navigate('/shop')
  }

  const navigateToC = () => {
    navigate('/checkout')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [cartItems])

  return (
    <Helment title='Cart'>
      <CommonSection title='#Cart' sumarry='Add your coupon code & SAVE upto 70%!'/>

      <section className='carts section-p1'>
        {
          cartItems.length === 0 ? (
            <div className='empty'>
              <img src={img} />
              <h2>Cart is empty</h2>
              <button onClick={navigateTo} className='button'>Start Shopping</button>
            </div>
          ) : (
          <table style={{width: '100%'}}>
          <thead>
            <tr>
              <td>REMOVE</td>
              <td>IMAGE</td>
              <td>PRODUCT</td>
              <td>PRICE</td>
              <td>QUANTITY</td>
              <td>SUBTOTAL</td>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item, index) => ( 
                <Tr item={item} key={index}/>
              ))
            }
          </tbody>
          </table>
          )
        }
      </section>

      <section className='section-p1 carts-add'>
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input placeholder='Enter Your Coupon'/>
            <button>Apply</button>
          </div>
        </div>

        <div className="subtotal">
          <h3>Cart total</h3>

          <table>
            <tbody>
            <tr>
              <td>Cart subtotal</td>
              <td>${totalAmount}</td>
            </tr>

            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>

            <tr>
              <td><strong>Total</strong></td>
              <td><strong>${totalAmount}</strong></td>
            </tr>
            </tbody>
          </table>
          <div className='fl'>
          <button onClick={navigateToC}>Proced to checkout</button>
          <button onClick={navigateTo}>Continue Shopping</button>
          </div>
        </div>
      </section>
    </Helment>
  )
}

const Tr = ({item}) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(
      CartAction.deleteItem(item.id)
    )
  }
  return <tr>
  <td>
    <span onClick={deleteProduct}><i className="ri-delete-bin-line"></i></span>
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
    <span>{item.quantity}px</span>
  </td>
  <td>
    <span>${item.totalPrice}</span>
  </td>
</tr>

}

export default Cart