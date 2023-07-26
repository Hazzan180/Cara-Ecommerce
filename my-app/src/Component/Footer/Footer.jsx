import React from 'react';
import '../Footer/footer.css';
import logo from '../../assets/images/logo.png'
import img1 from '../../assets/images/pay/app.jpg'
import img2 from '../../assets/images/pay/play.jpg'
import img3 from '../../assets/images/pay/pay.png'

import {Link} from 'react-router-dom'

const Footer = () => {
  const now = new Date()
  return (
    <section className='section-p1 '>
    <div className='footer'>
    <div className="col">
        <img src={logo} className='logo'/>
        <h4>Contact</h4>
        <p><strong>Address:</strong> 562 wellignton Road, street 32</p>
        <p><strong>Phone:</strong> +01 222 365 / +02 333 356</p>
        <p><strong>Hours:</strong> 24/7</p>
        <div className='follow'>
          <h4>Follow Us</h4>
          <div className='icon'>
          <i className="ri-facebook-fill"></i>
          <i className="ri-youtube-fill"></i>
          <i className="ri-twitter-fill"></i>
          <i className="ri-mail-fill"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to='/home'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/cart'>Cart</Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/wishList'>Wish List</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Atore Or Google Play</p>
        <div className='row'>
          <img src={img1} />
          <img src={img2} />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={img3} />
      </div>
    </div>

      <div className='copyright'>
        <p>©Copyright 2023 developed by hazzan180  All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer