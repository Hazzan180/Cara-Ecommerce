import React from 'react'
import '../Style/about.css'

import img from '../assets/images/about/a6.jpg'
import video from '../assets/images/about/1.mp4'

import Helement from '../Component/Helment/Helment'
import CommonSection from '../Component/UI/commonSection'
import Features from '../Component/Feature/Feature'

const About = () => {
  return (
    <Helement title='About'>
      <CommonSection title='#KnowUs'/>

      <section className='about-head section-p1'>
        <img src={img} />
        <div>
          <h2>Who We Are</h2>
          <p>Endless possibilities for every business
           Sell online, process payments, build financial products, or use business tools designed to grow your business.</p>
          <marquee bgcolor='#ccc' loop='-1' scrollamount='5' style={{width: '100%'}}>Endless possibilities for every business</marquee>
        </div>
      </section>

      <section className='about-app section-p1'>
        <h2>Download Our App</h2>
        <div className='video'>
          <video src={video} autoPlay muted loop></video>
        </div>
      </section>

      <Features />
    </Helement>
  )
}

export default About