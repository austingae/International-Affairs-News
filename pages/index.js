import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import ImageSlider from '../components/index/image-slider';
import CountryLogoSlider from '../components/index/country-logo-slider';
import NewsCategories from '../components/index/news-categories/news-categories';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elliott</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Navigation Bar in _app.js*/}

        {/* Country Logo Slider */}
        <CountryLogoSlider />

        {/* Image Slider */}
        <ImageSlider />

        <div id='news-categories'>
          {/* News Categories */}
          <NewsCategories />
        </div>

      </main>
    </div>
  )
}

