import React,{useRef} from 'react'
import '../Style/checkout.css'

import {useNavigate} from 'react-router-dom'

const Checkout = () => {
    
    const cardName = useRef('')
    const cardNo = useRef('')
    const cardEdate = useRef('')
    const cardCvv = useRef('')

    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/done')
    }

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
            <input type="text" placeholder='000 000 000' ref={cardNo} required/>
        </div>
        <div className="horizontal-grid">
        <div className="input-group">
            <label htmlFor="date">Expiration date</label>
            <input type="text" placeholder='12/27' ref={cardEdate} required/>
        </div>
        <div className="input-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" placeholder='CVV' ref={cardCvv} required/>
        </div>
        </div>
    </div>
    <button type="submit" className='checkout'>Checkout</button>
    </form>
</section>
  )
}

export default Checkout