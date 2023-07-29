import React from 'react'

const Helment = (props) => {
  /* The line `document.title = "Cara -" + props.title` is setting the title of the HTML document to be
  "Cara -" followed by the value of `props.title`. This is useful for dynamically updating the title
  of the webpage based on the value passed in through the `title` prop. */
    document.title = "Cara -" + props.title 
  return (
    <div>{props.children}</div>
  )
}

export default Helment