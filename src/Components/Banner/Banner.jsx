import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './Banner.css'

const Banner = (props) => {
    return (
        <>
            <Splide options={{
                rewind: true,
                width: "100%",
                gap: '1rem',
                autoplay:false,
            }}>
                <SplideSlide>
                    <img src={props.bannerimg3} alt="bannerimg 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={props.bannerimg2} alt="bannerimg 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={props.bannerimg1} alt="bannerimg 3" />
                </SplideSlide>
            </Splide>
        </>


    )
}

export default Banner