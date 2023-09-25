import React from 'react'
import './Sidebar.css'

const Sidebar = (props) => {
  return (
    <div className='sidebar-container'>
        <hr className='white'/>
        <h3 className='white'>Sort By</h3>
        <hr className='white' />
        <p style={{color:"white"}}> <input type="radio" name='sort' onClick={props.lowToHigh} />Low to High </p>
        <p style={{color:"white"}}> <input type="radio" name='sort' onClick={props.highToLow} />High to Low </p>
    </div>
  )
}

export default Sidebar