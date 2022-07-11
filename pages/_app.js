import '../styles/globals/globals.css'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className='nav'>
        <div className='nav__container'>
          <Image 
            src="/images/logo/logo.png"
            width="50px"
            height="50px"
          />
          <h3 className='nav__website-name'>Elliott</h3>
        </div>
        <div className='nav__container'>
          <a className='nav__link nav__link--margin-right'
          onClick={() => {
            document.getElementById('news-categories').scrollIntoView({behavior: "smooth"});
          }}>Categories</a>
          <a className='nav__link'>About Us</a>
        </div>
      </nav>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

/*
HTML & CSS & Javascript Approach: 
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  - 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements - Yes. 
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript - Yes. 
*/

/*
scrollIntoView(): https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
*/

