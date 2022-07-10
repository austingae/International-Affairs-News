import React from 'react'

//Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ImageSlider = () => {
  return (
    <>
      <Splide 
        aria-label="My Image Sliders"
        options={ {
          width: "100%",
          autoplay: true,
          interval: 7000,
          rewind: true,
        }}
        >
        <SplideSlide>
          <img src="/images/image-slider/1.jpg" style={{width: "100%"}} alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image-slider/2.jpg" style={{width: "100%"}} alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image-slider/3.webp" style={{width: "100%"}} alt="Image 3"/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image-slider/4.jpg" style={{width: "100%"}} alt="Image 4"/>
        </SplideSlide>
      </Splide>
    </>
  )
}

export default ImageSlider

/*
Splide Documentation
React Splide: https://splidejs.com/integration/react-splide/
Options for the Splide: https://splidejs.com/guides/options/
*/