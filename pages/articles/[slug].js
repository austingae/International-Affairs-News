import React from 'react'

const Articles = () => {
  return (
    <div>Articles</div>
  )
}

export default Articles

export async function getServerSideProps(pageContext) {
  const slug = pageContext.query.slug;

  
  console.log(slug);
  return {
    props: {

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
