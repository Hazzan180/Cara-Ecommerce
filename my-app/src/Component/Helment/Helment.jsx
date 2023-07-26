import React from 'react'

const Helment = (props) => {
    document.title = "Cara -" + props.title 
  return (
    <div>{props.children}</div>
  )
}

export default Helment