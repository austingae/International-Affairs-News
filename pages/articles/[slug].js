import React from 'react'
import Link from 'next/link'

const Articles = ({newsArticles}) => {
  return (
    <>
    {
      newsArticles.map((article) => {
        return (
          <div key={article.title}>
            <img src={article.urlToImage} style={{width: '200px'}}/>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button>
              <Link href={article.url}>
                <a>Read More</a>
              </Link>
            </button>
          </div>
        )
      })
    }
    </>
  )
}

export default Articles

export async function getServerSideProps(pageContext) {
  //FROM THE SLUG, SEPARATE THE SLUG FROM THE PAGE NUMBER TO MAKE TWO VARIABLES: slug & pageNumber
  const rawSlug = pageContext.query.slug; //rawSlug = north-america--1
  const rawSlugArray = rawSlug.split("--", 2); //rawSlugArray = [north-america, 1]

  const slug = rawSlugArray[0]; //slug = north-america
  const pageNumber = rawSlugArray[1]; //pageNumber = 1

  console.log(slug);
  console.log(pageNumber);

  
  let jsonFile = await fetch (`https://raw.githubusercontent.com/austingae/International-Affairs-News/master/keywords/keywords.json`); //fetches the keywords.json, a json file which I made
  let keywordsData = await jsonFile.json(); //keywordsData = JSON file Content

  //RETRIEVE THE KEYWORDS and DOMAINS BY CHECKING IF THE SLUG ON THE WEBSITE EQUALS the SLUG IN THE JSON FILE>
  let keywords = "";
  let domains = "";
  keywordsData.forEach((datum) => { //go through every item in the the keywordsData
    if (slug == datum.slug) { //if the slug equals the item's slug, then...
      keywords = datum.keywords; //then make the keywords = the item's keywords
      domains = datum.domains;
    }
  })

  console.log(keywords);

  //News API Data
  let newsAPIResponse = await fetch(`https://newsapi.org/v2/everything?` + 
  `q=${keywords}&` + 
  `from=2022-07-01&` + 
  `language=en&` + 
  `sortBy=publishedAt&` + 
  `domains=${domains}& ` +
  `pageSize=10&` + 
  `page=${pageNumber}&` + 
  `apiKey=3daa9affabe0493aa7dd7048d570c177`
  );

  let newsAPIData = await newsAPIResponse.json();

  //newsArticles - an array that holds news articles
  let newsArticles = newsAPIData.articles;
  return {
    props: {
      newsArticles: newsArticles,
    }
  }
}

/*
1) Decide whether to use getServerSideProps or getStaticProps
getServerSideProps fetches the data before the website page loads.
Therefore, if the News API adds new data, and I click refresh, getServerSideProps
will fetch the data, including the new data, and give the data to the Page Component that will
then display the data.

getStaticProps fetches the data only at build time. 
Therefore, if the News API adds new data, and I click refresh, the website page will not display
the new data. To show the new data, I will need to do build again. 

2) Type the stuff inside the data-fetching functions -- getServerSideProps or getStaticProps.
*/

//News API Documentation for Everything: https://newsapi.org/docs/endpoints/everything
