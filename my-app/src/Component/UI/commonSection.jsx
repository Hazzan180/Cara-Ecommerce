import React from 'react'
import '../../Style/commonSection.css'

const commonSection = ({title, sumarry}) => {
  return (
    <div className='common-section'>
        <h1>{title}</h1>
        <p>{sumarry}</p>
    </div>
  )
}

export default commonSection