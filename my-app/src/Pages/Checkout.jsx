/* The code is importing necessary dependencies and styles for the Checkout component. */
import React,{useRef} from 'react'
import '../Style/checkout.css'

import {useNavigate} from 'react-router-dom'

const Checkout = () => {
    
    /* The code is using the `useRef` hook from React to create four references (`cardName`, `cardNo`,
    `cardEdate`, `cardCvv`) that will be used to access the values of the input fields in the form.
    These references are assigned initial values of an empty string. */
    const cardName = useRef('')
    const cardNo = useRef('')
    const cardEdate = useRef('')
    const cardCvv = useRef('')

   /* The code is using the `useNavigate` hook from the `react-router-dom` library to create a
   `navigate` function. This function can be used to programmatically navigate to a different route
   in the application. */
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/done')
    }

   /**
    * The submitHandler function takes form input values, creates an object with those values, logs the
    * object to the console, and then calls the navigateTo function.
    */
    const submitHandler = (e) => {
        e.preventDefault()
        const cardNameMsg = cardName.current.value
        const cardNoMsg = cardNo.current.value
        const cardEdateMsg = cardEdate.current.value
        const cardCvvMsg = cardCvv.current.value

        const reviewobj = {
            name: cardNameMsg,
            number: cardNoMsg,
            ExperiedDate: cardEdateMsg,
            cvv: cardCvvMsg
        }

        console.log(reviewobj)
        navigateTo()
    }

 /* The `return` statement is returning JSX code that represents the structure and content of the
 Checkout component. */
  return (
    <section className='formB'>
    <form className='form' onSubmit={submitHandler}>
    <div className='checkout-method'>
        <button className='butto'>
        <i className="ri-visa-line"></i>
        </button>
        <button className='butto'>
        <i className="ri-mastercard-line"></i>
        </button>
    </div>
    <div className="checkout-information">
        <div className="input-group">
            <label htmlFor="name">Name On Card</label>
            <input type="text" placeholder='Enter name' ref={cardName} required/>
        </div>
        <div className="input-group">
            <label htmlFor="number">Card Number</label>
            <input type="number" placeholder='000 000 000' ref={cardNo} required/>
        </div>
        <div className="horizontal-grid">
        <div className="input-group">
            <label htmlFor="date">Expiration date</label>
            <input type="date" placeholder='12/27' ref={cardEdate} required/>
        </div>
        <div className="input-group">
            <label htmlFor="cvv">CVV</label>
            <input type="number" placeholder='CVV' ref={cardCvv} required/>
        </div>
        </div>
    </div>
    <button type="submit" className='checkout'>Checkout</button>
    </form>
</section>
  )
}

export default Checkout