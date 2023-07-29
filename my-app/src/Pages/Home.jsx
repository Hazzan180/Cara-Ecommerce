/* The code is importing various components and libraries from different files and packages. */
import React,{useState, useEffect} from 'react'
import Helment from '../Component/Helment/Helment'
import Slider from '../Component/Swiper/Slider'

import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

import '../Style/home.css'

import Featur from '../Component/Feature/Feature'
import ProductList from '../Component/UI/ProductList'
import product from '../assets/data/products'
import newArrival from '../assets/data/newArrival'
import Clock  from '../Component/UI/Clock'


const Home = () => {
  
  /* The code is using the `useState` hook from React to create three state variables:
  `featuredProduct`, `newArrivals`, and `newAdded`. */
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [newAdded, setNewAdded] = useState([]);

  const navigate = useNavigate();


  /* The `useEffect` hook is used to perform side effects in a functional component. In this code, the
  `useEffect` hook is used to fetch and set the values of the `featuredProduct`, `newArrivals`, and
  `newAdded` state variables. */
  useEffect(() => {
    const fFeaturedProduct = product.filter((item) => item.category === 'shoe');
    const fNewArrivals = newArrival.filter((item) => item.category === 'newArrivals');
    const fNewAdded = product.filter((item) => item.category === 'hoodi');

    setFeaturedProduct(fFeaturedProduct);
    setNewArrivals(fNewArrivals);
    setNewAdded(fNewAdded);
  },[])

  const navigateTo = () => {
    navigate('/shop')
  }

  /* The `return` statement is returning JSX code that represents the structure and content of the Home
  component. */
  return (
    <Helment title='Home'>
      <section className='hero'>
        <h4>Hot Promotions</h4>
        <h2>Fashion Trending</h2>
        <h1>Great Collection</h1>
        <p>Save more with coupons & up to 20% off</p>
        <Link className='link' to='/shop'>Shop Now</Link>
      </section>

      <Featur/>

      <section className='categories'>
        <h4 className='section-title section-p1'>
          <span>Popular</span> Categories
        </h4>
        
        <Slider />
      </section>

      <section className='featuredPro section-p1'>
          <h2>Featured Products</h2>
          <p>Summer Collect New Design</p>
          <ProductList data={featuredProduct}/>
      </section>

      <section className='banner section-m1'>
        <h4>Repair Services</h4>
        <h2>Up To <span>70% Off</span> - All T-Shirts & Shoes</h2>
        <motion.button onClick={navigateTo} whileTap={{scale:1.2}} className='normal'>
          Explore More
        </motion.button>
      </section>

      <section className='featuredPro section-p1'>
          <h2>New Arrivals</h2>
          <p>Summer Collect New Design</p>
          <ProductList data={newArrivals}/>
      </section>

      <section className='sm-banner section-m1'>
        <Clock />
      </section>

      <section className='featuredPro section-p1'>
          <h2>Newly Added Products</h2>
          <p>Summer Collect New Design</p>
          <ProductList data={newAdded}/>
      </section>
  
    </Helment>
  )
}

export default Home