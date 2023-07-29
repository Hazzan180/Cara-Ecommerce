import React,{useEffect, useRef, useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom'
import logo from '../../assets/images/logo.png';

import {motion} from 'framer-motion'

import { toast } from 'react-toastify';
import {useSelector} from 'react-redux';

import {useUserAuth} from '../../Context/useAuthContext'
import './header.css';

/* `Nav_links` is an array of objects that contains the paths and display names for the navigation
links in the header component. Each object represents a navigation link and has two properties:
`path` and `display`. */
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
  /* `const navRef = useRef(null)` and `const profileRef = useRef(null)` are creating two ref objects
  using the `useRef` hook. */
  const navRef = useRef(null) 
  const profileRef = useRef(null)

  /* `const {user, logOut} = useUserAuth()` is using the `useUserAuth` custom hook to access the `user`
  and `logOut` values from the authentication context. The `user` value represents the currently
  logged-in user, and the `logOut` function is used to log the user out of the application. */
  const {user, logOut} = useUserAuth()

  /**
   * The openMenu function adds the 'active' class to the navRef element.
   */
  const openMenu = () => navRef.current.classList.add('active')

  /**
   * The closeMenu function removes the 'active' class from the navRef element.
   */
  const closeMenu = () => navRef.current.classList.remove('active')

  /**
   * The toggleProfile function toggles the 'show' class on the profileRef element.
   */
  const toggleProfile = () => profileRef.current.classList.toggle('show')

  const navigate = useNavigate()
  

 /**
  * The above code defines two functions, `navigateToCart` and `navigateToWishlist`, which navigate to
  * different routes when called.
  */
  const navigateToCart = () => {
    navigate('/cart')
  }

  const navigateToWishlist = () => {
    navigate('/wishList')
  }

  /* `const cartQuantity = useSelector(state => state.cart.totalQuantity)` and `const cartWishList =
  useSelector(state => state.wishList.totalQuantity)` are using the `useSelector` hook from the
  `react-redux` library to access the `totalQuantity` values from the `cart` and `wishList` slices
  of the Redux store. */
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const cartWishList = useSelector(state => state.wishList.totalQuantity)

  /**
   * The handleLogout function logs the user out, displays a success message, and redirects to the home
   * page.
   */
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