import React from 'react'
import './ViewProduct.css'

const ViewProduct = (props) => {

    const changeUrl = (url) => {
        document.getElementById('main-img').src=url;
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-12">
                                <figure>
                                    <img id='main-img' src={props.imgUrl} alt="" />
                                </figure>
                            </div>
                            <div className="col-12">
                                <div className="row ">
                                    <div className="col-3">
                                        <figure>
                                            <img onClick={()=>{changeUrl(props.imgUrl)}} src={props.imgUrl} alt="" />
                                        </figure>
                                    </div>
                                    <div className="col-3">
                                        <figure>
                                            <img onClick={()=>{changeUrl(props.smimg1)}} src={props.smimg1} alt="" />
                                        </figure>
                                    </div>
                                    <div className="col-3">
                                        <figure>
                                            <img onClick={()=>{changeUrl(props.smimg2)}} src={props.smimg2} alt="" />
                                        </figure>
                                    </div>
                                    <div className="col-3">
                                        <figure>
                                            <img onClick={()=>{changeUrl(props.smimg3)}} src={props.smimg3} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                        <p>₹{props.price}/-</p>
                    </div>
                    <div className="col-lg-6 col-12 pr-details">
                        <h1>Product Details</h1>
                        <p> <strong> Product Dimensions :</strong>  35 x 20 x 10 cm; 730 Grams</p>
                        <p> <strong>Date First Available:</strong>  2 August 2021</p>
                        <p> <strong>Manufacturer  :</strong>  Neeman's</p>
                        <p> <strong>ASIN  :</strong>  B09BR8HGFJ</p>
                        <p> <strong>Item model number :</strong> KNIT_SNEAKERS_for_M</p>
                        <p> <strong> Country of Origin  :</strong> India</p>
                        <p> <strong> Department  :</strong>  Mens</p>
                        <p> <strong>Manufacturer  :</strong>  Neeman's</p>
                        <p> <strong>Packer  :</strong>  Neeman's</p>
                        <p> <strong>Item Weight  :</strong>  730 g</p>
                        <p> <strong>Item Dimensions LxWxH  :</strong>  35 x 20 x 10 Centimeters</p>
                        <p> <strong>Net Quantity  :</strong>  1.00 Set</p>
                        <p> <strong>Generic Name  :</strong>  Sneaker</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewProduct

