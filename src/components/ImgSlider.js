import React from 'react'
import styled from "styled-components"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



function ImgSlider() {

    let settings = {

        dots: true,
        infinitte: true,
        speed: 500,
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    
    return (
        <Carousel{...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />

            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />

            </Wrap>
        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
margin-top: 20px;

ul li button{
&:before{
font-size: 10px;
color:white;
}
}

li.stick-active button:before{
color:white;

}

.slick-list{
overflow: visible;
}
button
{
z-index: 1;
}
`

const Wrap = styled.div`
cursor: pointer;
img{

border:4px solid transparent;
border-radius:4px;
width:100%;
height:100;
//box-shadow: rgb(0 0 0 / 69%) 0 px 26px 30px -10px,
//rgb (0 0 0 / 73%) 0px 16px 10px - 10px;
transition-duration: 300ms;

box-shadow: 20px 20px 20px;
color: #000000;
&:hover{
border: 4px solid rgba(249, 249, 249, 0.8);
}



}
`