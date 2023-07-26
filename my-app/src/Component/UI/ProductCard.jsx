import React from 'react';
import '../../Style/productCard.css';
import {useDispatch} from 'react-redux';

import {motion} from 'framer-motion'
import { toast } from 'react-toastify';

import { CartAction } from '../../Redux/Slice/CartSlice';
import { wishListAction } from '../../Redux/Slice/WishListSlice';

import {useNavigate, Link} from 'react-router-dom'

const ProductCard = ({item}) => {

  const dispatch = useDispatch();
  
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate(`/shop/${item.id}`)
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
    toast.success('Product added successfuly')
  }

  const addToWishList = () => {
    dispatch(
      wishListAction.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price
      })
    )
  }

  return (
    <div className='pro-card'>
        <motion.img whileHover={{scale: 0.9}} onClick={navigateTo} src={item.imgUrl} alt='img' style={{height: '40vh'}}/>
        <div className='des'>
          <span>{item.category}</span>
          <h5>{item.productName}</h5>
          <div className='star'>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
          </div>
          <h4>${item.price}</h4>
        </div>
        <motion.a whileTap={{scale:1.2}} className='cart' onClick={addToCart}>
          <i className="ri-shopping-cart-2-line"></i>
        </motion.a>
        <motion.a whileTap={{scale:1.2}} className='heart' onClick={addToWishList}>
          <i  className="ri-heart-line"></i>
        </motion.a>
    </div>
  )
}

export default ProductCard