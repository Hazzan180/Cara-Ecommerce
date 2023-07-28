import React,{useEffect, useRef, useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom'
import logo from '../../assets/images/logo.png';

import {motion} from 'framer-motion'

import { toast } from 'react-toastify';
import {useSelector} from 'react-redux';

import {useUserAuth} from '../../Context/useAuthContext'
import './header.css';

const Nav_links = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'about',
    display: 'About',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
]

const Header = () => {
  const navRef = useRef(null) 
  const profileRef = useRef(null)
  const {user, logOut} = useUserAuth()

  const openMenu = () => navRef.current.classList.add('active')

  const closeMenu = () => navRef.current.classList.remove('active')

  const toggleProfile = () => profileRef.current.classList.toggle('show')

  const navigate = useNavigate()
  

  const navigateToCart = () => {
    navigate('/cart')
  }

  const navigateToWishlist = () => {
    navigate('/wishList')
  }

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const cartWishList = useSelector(state => state.wishList.totalQuantity)

  const handleLogout = async () => {
    try {
      await logOut()
      toast.success('Logged out successfully');
      navigate('/home');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }
  }

  return (
   <section className='header'>
    <div className='logo'>
      <img src={logo} alt='logo' />
    </div>

    <div>
      <ul  className='navbar' ref={navRef}>
        { 
          Nav_links.map((item, index)  => (
          <li key={index}>
            <NavLink to={item.path}>
              {item.display}
            </NavLink>
          </li>
          ))
        }
        <span className='close-icon' onClick={closeMenu}>
         <i className="ri-close-line"></i>
       </span>
      </ul>
    </div>

    <div className='nav-icons'>
       <span className="fav-icon" onClick={navigateToCart}>
          <i className="ri-shopping-bag-line"></i>
          <span className='qut'>{cartQuantity}</span>
       </span>

       <motion.span whileTap={{scale:1.2}} className="fav-icon" onClick={navigateToWishlist}>
          <i className="ri-heart-line"></i>
          <span className='qut2'>{cartWishList}</span>
       </motion.span>

       <div className='profile'>
       <button onClick={toggleProfile}>Accuont</button>

        <div className='profile-action' ref={profileRef}
        onClick={toggleProfile}>
        {
            user ? (
              <span onClick={handleLogout}>Logout</span>
            ) : (
              <div className='item-flex'>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
              </div>
            )
          }
        </div>
       </div>

       <motion.span whileTap={{scale:1.2}} className='menu-icon' onClick={openMenu}>
         <i className="ri-menu-line" style={{color: '#088178'}}></i>
       </motion.span>
    </div>
   </section>
  )
}

export default Header