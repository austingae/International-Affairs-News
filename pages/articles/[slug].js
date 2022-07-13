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
            <p>{article.formattedDate}</p>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>{article.source.name}</p>
            <button>  
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
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
  console.log(domains);
  
  //News API Data
  let newsAPIResponse = await fetch(`https://newsapi.org/v2/everything?` + 
  `q=${keywords}&` + 
  `language=en&` + 
  `sortBy=publishedAt&` + 
  `domains=${domains}&` +
  `pageSize=15&` + 
  `page=${pageNumber}&` + 
  `apiKey=12fd877f04d64df1a09a3616222315ca`
  );

  let newsAPIData = await newsAPIResponse.json();

  //rawNewsArticles - an array that holds news articles
  let rawNewsArticles = newsAPIData.articles;

  //Now, I am going to reformat the given date format to the date format I want.
  let newsArticles = [];
  rawNewsArticles.forEach((rawNewsArticle) => {
    let formattedDate = (rawNewsArticle.publishedAt).split('T', 2)[0];
    newsArticles.push({
      ...rawNewsArticle,
      formattedDate
    })
  })

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
