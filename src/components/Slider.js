import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider1 from '../assets/images/slider1.png';
import Slider2 from '../assets/images/slider2.png';
import Slider3 from '../assets/images/slider3.png';
import Slider4 from '../assets/images/slider4.png';
import '../assets/css/Slide.css';

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className='d-block carouselImg' src={Slider1} alt='Slider Img' />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block carouselImg'
            src={Slider2}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block carouselImg'
            src={Slider3}
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block carouselImg'
            src={Slider4}
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
