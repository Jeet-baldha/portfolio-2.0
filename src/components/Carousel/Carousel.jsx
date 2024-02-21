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
                <ProjectCard video={'/Tee-Hub - Brave 2024-02-17 01-29-07.mp4'} name={'T-hub'} description={'T-shirts selling website'} color={'black'} />
                <ProjectCard video={'/clideo_editor_c44a3324c0304a6792f7cc4d213f3a92.mp4 - VLC media player 2023-12-19 03-03-12.mp4'} color={'teal'} name={'FilmyHub'} description={'Movie databse collection of all movies'} />
            </Slider>
        </>
    );
};

export default Carousel;
