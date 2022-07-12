import Head from 'next/head'
import Link from 'next/link'

import ImageSlider from '../components/index/image-slider';
import CountryLogoSlider from '../components/index/country-logo-slider';
import NewsCategories from '../components/index/news-categories/news-categories';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elliott</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar in _app.js*/}

      <main>

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


/*
Responsive from 375px to 1440px
Navigation Bar - looks good.
Country Logo Slider - looks good.
Image Slider - looks good.
International Affairs News Categories Title - looks good.
Region Category - looks good.
Topic Category - looks good.
*/