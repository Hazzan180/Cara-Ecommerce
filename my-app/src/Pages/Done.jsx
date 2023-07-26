import React from 'react'
import {useNavigate} from 'react-router-dom'
//import img from  '../assets/images/empty/successful.jpg'
import '../Style/done.css'
import img from '../assets/images/empty/successful.jpg'

const Done = () => {
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/home')
    }


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