/* This code is importing necessary dependencies and resources for the `Done` component. */
import React from 'react'
import {useNavigate} from 'react-router-dom'
//import img from  '../assets/images/empty/successful.jpg'
import '../Style/done.css'
import img from '../assets/images/empty/successful.jpg'

const Done = () => {
    /* The code is using the `useNavigate` hook from the `react-router-dom` library to get a function
    that can be used to navigate to different routes in the application. */
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/home')
    }


  /* The `return` statement in the code is returning JSX (JavaScript XML) code that represents the
  structure and content of the component's rendered output. */
  return (
    <div className='center'>
      <img src={img}/>
      <h2>Thank You!</h2>
      <strong>Payment done Successfully</strong>
      <p>You will be redirected to the home page shortly or click here to return to home page</p>
      <button onClick={navigateTo} className='button'>Home</button>
    </div>
  )
}

export default Done