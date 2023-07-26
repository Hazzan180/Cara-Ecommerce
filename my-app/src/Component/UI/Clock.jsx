import React,{useState, useEffect} from 'react'
import '../../Style/clock.css'

import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

const Clock = () => {
    const navigate = useNavigate();
   
    const navigateTo = () => {
        navigate('/shop')
    }

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
  
    let interval;
  
    const countDown = () =>{
      const destination = new Date('Dec, 3, 2023').getTime()
      interval = setInterval(() => {
  
        const now = new Date().getTime()
        const different = destination - now
        const days = Math.floor(different / (1000 * 60 * 60 *24))
  
        const hours = Math.floor(different % (1000 * 60 * 60 *24) / 
        (1000 * 60 * 60))
  
        const minutes = Math.floor(different % (1000 * 60 * 60) / 
        (1000 * 60))
  
        const seconds = Math.floor(different % (1000 * 60) / 
        (1000))
  
        if(destination < 0) clearInterval(interval.current)
        else{
          setDays(days)
          setHours(hours)
          setMinutes(minutes)
          setSeconds(seconds)
        }
      })
    }
  
    useEffect(() => {
      countDown()
    })
    
  return (
    <>
        <h2 className='text1'>Deal of the Day</h2>
        <span className='span'>Limited quantities</span>
        <h6>Summer Collection New Morden Design</h6>
        <h6 className='price'>$90.00 <span>$130.00</span></h6>
        <h6 className='text2'>Hurry Up! offerEnd in</h6>

        <div className='container'>
        <div  className='timer-con'>
            <div className=''>
                <h4 className='timer-box'>{days}</h4>
                <h5 className=''>Days</h5>
            </div>
            <span className='colon'>:</span>
        </div>
        <div  className='timer-con'>
            <div className=''>
                <h4 className='timer-box'>{hours}</h4>
                <h5 className=''>Hours</h5>
            </div>
            <span className='colon'>:</span>
        </div>
        <div  className='timer-con'>
            <div className=''>
                <h4 className='timer-box'>{minutes}</h4>
                <h5 className=''>Minutes</h5>
            </div>
            <span className='colon'>:</span>
        </div>

        <div  className='timer-con'>
            <div className=''>
                <h4 className='timer-box'>{seconds}</h4>
                <h5 className=''>seconds</h5>
            </div>
        </div>
        </div>
       
        <motion.button whileTap={{scale:1.2}} onClick={navigateTo} className='white shop'>
            Shop Now
        </motion.button>
    </>
  )
}

export default Clock