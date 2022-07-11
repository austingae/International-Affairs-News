import React from 'react'

import styles from '../../../styles/news-categories/news-categories.module.css';

import NewsCategoryRegionTemplate from './news-category-region-template'
import NewsCategoryTopicTemplate from './news-category-topic-template';

const NewsCategories = () => {
  return (
    <>
      <h3 className={styles.title}>International Affairs News Categories</h3>

      {/* News Categories by Region */}
      <h4 className={styles.categorySectionTitle}>Regions</h4>
      <section className={styles.newsRegionCategoriesSection}>
        <NewsCategoryRegionTemplate regionLogo='/images/news-categories/regions/na.png' regionName='North America'/>
        <NewsCategoryRegionTemplate regionLogo='/images/news-categories/regions/sa.png' regionName='South America'/>
        <NewsCategoryRegionTemplate regionLogo='/images/news-categories/regions/eu.png' regionName='Europe'/>
        <NewsCategoryRegionTemplate regionLogo='/images/news-categories/regions/me.png' regionName='Middle East'/>
        <NewsCategoryRegionTemplate regionLogo='/images/news-categories/regions/af.png' regionName='Africa'/>
        <NewsCategoryRegionTemplate regionLogo='/images/news-categories/regions/as.png' regionName='Asia'/>
      </section>

      {/* News Categories by Topics */}
      <h4 className={styles.categorySectionTitle}>Topics</h4>
      <section className={styles.newsTopicCategoriesSection}>
        <NewsCategoryTopicTemplate 
        topicImage='/images/news-categories/topics/us-china-competition.jpg' 
        topicName='US-China Competition'
        />
        <NewsCategoryTopicTemplate 
        topicImage='/images/news-categories/topics/israel-palestinian-conflict.jpg' 
        topicName='Israel-Palestinian Conflict'
        />
        <NewsCategoryTopicTemplate 
        topicImage='/images/news-categories/topics/russo-ukrainian-war.jpg' 
        topicName='Russo-Ukrainian War'
        />
        <NewsCategoryTopicTemplate 
        topicImage='/images/news-categories/topics/iranian-nuclear-deal-negotiation.jpg' 
        topicName='Iranian Nuclear Deal Negotiation'
        />
      </section>
    </>
  )
}

export default NewsCategories

/*
Regions:
North America
South America
Europe
Middle East
Africa
Asia
*/

/*
Topics:
US-China Competition
Russo-Ukrainian War
Israel Palestinian Conflict
Iranian Nuclear Deal Negotiation
*/

/*
HTML & CSS & Javascript Approach: 
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - 
  - 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements -  
  4) Decorate the HTML elements
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript 
*/