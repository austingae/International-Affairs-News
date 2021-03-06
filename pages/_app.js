import '../styles/globals/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router' //https://stackoverflow.com/questions/58013066/how-to-hide-navbar-header-in-login-page-in-nextjs

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const pathName = router.pathname;

  return (
    <>
      <nav className='nav'>
        <Link href='/'>
          <div className='nav__container'>
            <img className='nav__website-logo' src='/images/logo/logo.png' />
            <h3 className='nav__website-name'>Elliott</h3>
          </div>
        </Link>
        <div className='nav__container'>
          {pathName == '/' ?
            <a className='nav__link nav__link--margin-right'
              onClick={() => {
                document.getElementById('news-categories').scrollIntoView({behavior: "smooth"});
              }}>Categories</a>
            :
            <a className='nav__link nav__link--margin-right'
            onClick={() => {
              window.location.href='/';
            }}
            >Home</a>
        }
        </div>
      </nav>

      <Component {...pageProps} />

      <footer className='footer'>
        <img className='footer__website-logo' src='/images/logo/logo.png' />
        <h3 className='footer__website-name'>Elliott</h3>
        <p className='footer__copyright'>Copyright &copy; austingae</p>
      </footer>
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

