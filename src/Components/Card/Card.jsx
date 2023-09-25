import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Card = (props) => {
  return (
    <Link to={'/product/'+props.id} style={{textDecoration:"none"}}>
      <div className='card-container mx-auto' >
        <div className="card-image">
          <figure>
            <img src={props.imgUrl} alt="img" style={{ width: "100%" }} />
          </figure>
        </div>

        <div className="card-text">
          <h2 className="title"> {props.title} </h2>
          <p className="desc"> {props.desc.slice(0, 50)}... </p>
          <h3 style={{ color: "lime" }}> ₹{props.price} </h3>
        </div>
        <div className="button-div">
          <Button text='Add to cart' link='/cart' />
          <Button text='Buy Now' link='/buy' />
        </div>
      </div>
    </Link>
  )
}

export default Card