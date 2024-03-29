// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from './ProjectCard';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,    
        arrow: true
    };

    return (
        <>
            <Slider {...settings}>
                <ProjectCard  name={'T-hub'} description={'T-shirts selling website'} color={'black'} />
                <ProjectCard  name={'T-hub'} description={'T-shirts selling website'} color={'black'} />
    
            </Slider>
        </>
    );
};

export default Carousel;
