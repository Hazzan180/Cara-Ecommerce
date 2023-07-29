/* The code is importing various modules and components from different files and libraries. */
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
 /* The code is using the `useState` hook to create two state variables: `tab` and `rating`. */
  const [tab, setTab] = useState('des')
  const [rating, setRating] = useState(null)

  /* The code is using the `useRef` hook to create two ref variables: `reviewUser` and `reviewMsg`.
  These ref variables are used to reference the input fields in the review form. They allow the code
  to access the current value of the input fields without triggering a re-render of the component. */
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  
 /* The code is using the `useParams` hook from the `react-router-dom` library to get the value of the
 `id` parameter from the URL. It then uses this `id` value to find the corresponding product object
 from the `Products` array. The `Products.find()` method is used to find the first object in the
 array that matches the condition `item.id === id`. The found product object is stored in the
 `products` variable. */
  const {id} = useParams()
  const products = Products.find(item => item.id === id);

 /* The `const dispatch = useDispatch()` line is using the `useDispatch` hook from the `react-redux`
 library to create a `dispatch` function. The `dispatch` function is used to dispatch actions to the
 Redux store. It allows the code to trigger state changes and update the store with new data. In
 this specific code, the `dispatch` function is used to dispatch the `addItem` action from the
 `CartSlice` slice. */
  const dispatch = useDispatch()

 /* The code is using object destructuring to extract specific properties from the `products` object.
 These properties include `productName`, `category`, `imgUrl`, `price`, `shortDesc`, `description`,
 `reviews`, and `avgRating`. By using object destructuring, the code can directly access these
 properties without having to use dot notation (`products.productName`, `products.category`, etc.). */
  const {productName, 
         category, 
         imgUrl, 
         price, 
         shortDesc, 
         description, 
         reviews, 
         avgRating,} = products
  
 /**
  * The function `addToCart` adds an item to the cart and displays a success message.
  */
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

  /* The code `const relatedProducts = Products.filter(item => item.category === category)` is
  filtering the `Products` array to create a new array called `relatedProducts`. It filters the
  array based on the condition `item.category === category`, which means it will only include items
  where the `category` property matches the value of the `category` variable. This creates an array
  of products that have the same category as the current product being displayed. */
  const relatedProducts = Products.filter(item => item.category === category)

 /**
  * The function `handleSubmit` is used to handle the submission of a review form in a React component.
  */
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

  /* The `useEffect` hook is used to perform side effects in a React component. In this specific code,
  the `useEffect` hook is used to scroll the window to the top whenever the `products` variable
  changes. */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [products])

 /* The `return` statement in the code is returning JSX (JavaScript XML) code, which represents the
 structure and content of the component's rendered output. */
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