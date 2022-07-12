import React from 'react'
import Link from 'next/link'

import styles from '../../../styles/news-categories/news-category-topic-template.module.css'

const NewsCategoryTopicTemplate = ({path, topicImage, topicName}) => {
  return (
    <Link href={path}>
      <a className={styles.topicLink}>
        <div className={styles.topicTemplate}>
          <img className={styles.topicImage} src={topicImage} />
          <p className={styles.topicName}>{topicName}</p>
        </div>
      </a>
    </Link>
  )
}

export default NewsCategoryTopicTemplate

/*

https://www.ft.com/content/9317cc0e-7664-11e9-be7d-6d846537acab
https://www.vox.com/2015/5/14/18093732/israel-palestine-misconceptions
*/
