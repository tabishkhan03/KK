import React from 'react'
import Card from './Card'
import './Card.css'

const CardContainer = (props) => {
  return (
    <div className='w-100' style={{ width: props.width }}>
      <div className="row">

        {
          props.products.map((p) => {
            return (
              <div className="col-lg-3 col-sm-6 col-12 " key={p.price}>
                <Card imgUrl={p.imgUrl} title={p.title} desc={p.desc} price={p.price} id={p.id} />
              </div>
            )

          })
        }
      </div>
    </div>
  )
}

export default CardContainer