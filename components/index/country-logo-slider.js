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
          focus: 'center',

          //No Arrows
          arrows: false,

          //No Pagination, aka the indicator dots
          pagination: false,

          //Autoplay
          autoplay: true,
          interval: 3000,
          rewind: true,

          breakpoints: {
            500: {
              perPage: 6,
            },
            750: {
              perPage: 7,
            },
            850: {
              perPage: 8,
            },
            950: {
              perPage: 9,
            },
            1050: {
              perPage: 10,
            },
            1150: {
              perPage: 12,
            },
            1250: {
              perPage: 13,
            },
            1350: {
              perPage: 14,
            },
            1450: {
              perPage: 15,
            }
          }
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
          <img className={styles.countryLogo} src="/images/country-logo-slider/18.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/19.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/20.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/21.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/22.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/23.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/24.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/25.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/26.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/27.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/28.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/29.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/30.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/31.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/32.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/33.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/34.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/35.png"/>
        </SplideSlide>
        <SplideSlide>
          <img className={styles.countryLogo} src="/images/country-logo-slider/36.png"/>
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