import React from 'react'

import styles from '../../../styles/news-categories/news-categories.module.css';

import NewsCategoryRegionTemplate from './news-category-region-template'
import NewsCategoryTopicTemplate from './news-category-topic-template';

const NewsCategories = () => {
  return (
    <>
      <h3 className={styles.title}>International Affairs News Categories</h3>

      {/* News Categories by Region */}
      <section>
        <h4 className={styles.categoryTitle}>Regions</h4>
        <div className={styles.regionSection}>
          <NewsCategoryRegionTemplate path='/articles/north-america--1' regionLogo='/images/news-categories/regions/na.png' regionName='North America'/>
          <NewsCategoryRegionTemplate path='/articles/south-america--1' regionLogo='/images/news-categories/regions/sa.png' regionName='South America'/>
          <NewsCategoryRegionTemplate path='/articles/europe--1' regionLogo='/images/news-categories/regions/eu.png' regionName='Europe'/>
          <NewsCategoryRegionTemplate path='/articles/middle-east--1' regionLogo='/images/news-categories/regions/me.png' regionName='Middle East'/>
          <NewsCategoryRegionTemplate path='/articles/africa--1' regionLogo='/images/news-categories/regions/af.png' regionName='Africa'/>
          <NewsCategoryRegionTemplate path='/articles/asia--1' regionLogo='/images/news-categories/regions/as.png' regionName='Asia'/>
        </div>
      </section>

      {/* News Categories by Topics */}
      <h4 className={styles.categoryTitle}>Topics</h4>
      <section className={styles.topicSection}>
        <NewsCategoryTopicTemplate 
        path='/articles/us-china-competition--1'
        topicImage='/images/news-categories/topics/us-china-competition.jpg' 
        topicName='US-China Competition'
        />
        <NewsCategoryTopicTemplate 
        path='/articles/israel-palestinian-conflict--1'
        topicImage='/images/news-categories/topics/israel-palestinian-conflict.jpg' 
        topicName='Israel-Palestinian Conflict'
        />
        <NewsCategoryTopicTemplate 
        path='/articles/russo-ukrainian-war--1'
        topicImage='/images/news-categories/topics/russo-ukrainian-war.jpg' 
        topicName='Russo-Ukrainian War'
        />
        <NewsCategoryTopicTemplate 
        path='/articles/iranian-nuclear-deal-negotiation--1'
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