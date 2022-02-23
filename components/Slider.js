import React, {Component} from 'react'
import Slider from 'react-slick'

export default class Carousel extends Component {
    render() {
        const settings  = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            arrows: true,
            slidesToScroll: 2,
            className: "slides center xl:max-w-5xl md:max-w-md max-w-xs",
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        }
        return(
            <Slider {...settings}> 
                {this.props.children}
            </Slider>
        );
    }
}