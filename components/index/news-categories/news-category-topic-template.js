import React from 'react'
import Image from 'next/image'

import styles from '../../../styles/news-categories/news-category-topic-template.module.css'

const NewsCategoryTopicTemplate = ({topicImage, topicName}) => {
  return (
    <div className={styles.newsCategoryTopicTemplate}>
      <Image 
      src={topicImage}
      width='124px'
      height='70px'
      />
      <p className={styles.topicName}>{topicName}</p>
    </div>
  )
}

export default NewsCategoryTopicTemplate

/*

https://www.ft.com/content/9317cc0e-7664-11e9-be7d-6d846537acab
https://www.vox.com/2015/5/14/18093732/israel-palestine-misconceptions
*/
