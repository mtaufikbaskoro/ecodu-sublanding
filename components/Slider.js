import React, {Component} from 'react'
import Slider from 'react-slick'

const Carousel = (props) => {
    const settings  =  props.settings
    return(
        <Slider {...settings}> 
            {props.children}
        </Slider>
    );
}

export default Carousel