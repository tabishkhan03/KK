import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = (props) => {
  return (
    <Link className="custom-btn" to={props.link}>{props.text}</Link>
  )
}

export default Button