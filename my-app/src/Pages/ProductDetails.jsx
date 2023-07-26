import React,{useState, useRef, useEffect} from 'react'
import '../Style/productDetails.css'

import Helment from '../Component/Helment/Helment'
import CommonSection from '../Component/UI/commonSection'
import Products from  '../assets/data/products'

import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'

import { CartAction } from '../Redux/Slice/CartSlice';
import {toast} from 'react-toastify'

import ProductList from '../Component/UI/ProductList'

const ProductDetails = () => {
  const [tab, setTab] = useState('des')
  const [rating, setRating] = useState(null)

  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  
  const {id} = useParams()
  const products = Products.find(item => item.id === id);

  const dispatch = useDispatch()

  const {productName, 
         category, 
         imgUrl, 
         price, 
         shortDesc, 
         description, 
         reviews, 
         avgRating,} = products
  
  const addToCart = () => {
    dispatch(
      CartAction.addItem({
        id, 
        imgUrl: imgUrl,
        price,
        productName
      })
    )
    toast.success('Product added successfuly')
  }

  const relatedProducts = Products.filter(item => item.category === category)

  const handuleSubmit = e => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating
    }
    console.log(reviewObj)
    toast.success('Review submited')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [products])

  return (
   <Helment title={category}>
    <CommonSection title={`#${category}`}/>

   <section className='prodetails section-p1'>
    <div className='single-pro-img'>
      <img src={imgUrl} style={{width: '100%'}}/>
    </div>

     <div className='single-pro-details'>
      <h4>{productName}</h4>

      <div className='flex'>
        <div>
          <span><i className="ri-star-s-fill"></i></span>
          <span><i className="ri-star-s-fill"></i></span>
          <span><i className="ri-star-s-fill"></i></span>
          <span><i className="ri-star-s-fill"></i></span>
          <span><i className="ri-star-half-s-fill"></i></span>
        </div>
        <span className='spa'>({avgRating} ratings)</span>
      </div>

      <div className='flex'>
        <h4>${price}</h4>
        <span className='spa'>{`category: ${category}`}</span>
      </div>

      <h4>Product details</h4>
      <p>{shortDesc}</p>
      <button onClick={addToCart}>Add To Cart</button>
     </div>
   </section>

   <section className='desRes section-p1'>
    <div className='displayFlex'>
      <h4 onClick={() => setTab('des')} className={`${tab === 'des' ? 'active' : ''}`}>
        Description
      </h4>
      <h4 onClick={() => setTab('rev')} className={`${tab === 'rev' ? 'active' : ''}`}>
        Review ({reviews.length})
      </h4>
    </div>

    <div>
    {
      tab === 'des' ? (
        <p>{description}</p>
      ) : (
        <div>
         <ul>
         {
             reviews?.map((item, index) => (
              <div key={index} className='review'>
                 <span>hazzan</span><br/>
                 <span style={{color: 'rgb(235, 171, 53)'}}>{`${item.rating} (rating)`}</span>
                 <p>{item.text}</p>
              </div>
            ))
          }
         </ul>
         <div className='review-form'>
            <h4>Leave your experience</h4>
              <form onSubmit={handuleSubmit}>
                <div className="form-group">
                  <input type='text' placeholder='Enter name'
                   ref={reviewUser}   required
                  />   
                </div>
                <div className="form-group flexs">
                          <span onClick={() => setRating(1)}>1 <i className="ri-star-s-fill"></i></span> 
                          <span onClick={() => setRating(2)}>2 <i className="ri-star-s-fill"></i></span>
                          <span onClick={() => setRating(3)}>3 <i className="ri-star-s-fill"></i></span> 
                          <span onClick={() => setRating(4)}>4 <i className="ri-star-s-fill"></i></span> 
                          <span onClick={() => setRating(5)}>5 <i className="ri-star-s-fill"></i></span>   
                </div>
                <div className="form-group">
                  <textarea rows={4} type='text' 
                  placeholder='Review Message..'
                  ref={ reviewMsg} required
                  />   
                </div>
                <button type='submit'>Submit</button>
              </form>
            </div>
        </div>
      )
    }
    </div>
   </section>

   <section className='featuredPro section-p1'>
   <h2>You might also like</h2>
    <ProductList data={relatedProducts}/>
   </section>
   </Helment>
  )
}

export default ProductDetails