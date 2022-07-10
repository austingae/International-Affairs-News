import React from 'react'

//Splide
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

import styles from '../../styles/country-logo-slider/country-logo-slider.module.css'

const CountryLogoSlider = () => {
  return (
    <>
      <Splide 
        aria-label="My Image Sliders"
        options={ {
          //Focus Center Splide
          type: 'loop',
          perPage: 6,
          focus: 'center',

          //No Arrows
          arrows: false,

          //No Pagination, aka the indicator dots
          pagination: false,

          //Autoplay
          autoplay: true,
          interval: 3000,
          rewind: true,

        }}
        >
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/1.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/2.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/3.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/4.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/5.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/6.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/7.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/8.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/9.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/10.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/11.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/12.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/13.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/14.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/15.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/16.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/17.png"/>
        </SplideSlide>
        
      </Splide>
    </>
  )
}

export default CountryLogoSlider

/*
Splide Documentation
Focus Center Splide: https://splidejs.com/
React Splide: https://splidejs.com/integration/react-splide/
Options for the Splide: https://splidejs.com/guides/options/
*/

/*
Countries:
United States, South Korea, China, United Kingdom, Iran, Japan, Russia, Brazil, France, Egypt, India, Ukraine, Sweden, Mexico, Turkey, Indonesia, Australia
*/