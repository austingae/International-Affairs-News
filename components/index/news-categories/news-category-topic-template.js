import React from 'react'

import styles from '../../../styles/news-categories/news-category-topic-template.module.css'

const NewsCategoryTopicTemplate = ({topicImage, topicName}) => {
  return (
    <div className={styles.topicTemplate}>
      <img className={styles.topicImage} src={topicImage} />
      <p className={styles.topicName}>{topicName}</p>
    </div>
  )
}

export default NewsCategoryTopicTemplate

/*

https://www.ft.com/content/9317cc0e-7664-11e9-be7d-6d846537acab
https://www.vox.com/2015/5/14/18093732/israel-palestine-misconceptions
*/
