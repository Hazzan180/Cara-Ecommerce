import React from 'react'
//import img1 from '../assets/images/features/f1.png'
import serviceData from '../../assets/data/serviceData'
import './feature.css'
import {motion} from 'framer-motion'

const Feature = () => {
  return (
    <section className='feature section-p1'>
        {
          serviceData.map((item, index) => (
            <div className='fe-box' key={index}>
             <motion.img whileHover={{scale: 0.9}} src={item.img} />
              <h6 style={{backgroundColor: item.bg}}>{item.title}</h6>
            </div>
          ))
        }
      </section>
  )
}

export default Feature