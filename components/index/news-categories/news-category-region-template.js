import React from 'react'
import Image from 'next/image'

import styles from '../../../styles/news-categories/news-category-region-template.module.css'

const NewsCategoryRegionTemplate = ({regionLogo, regionName}) => {
  return (
    <div className={styles.regionTemplate}>
      <img className={styles.regionLogo}src={regionLogo} />
      <p className={styles.regionName}>{regionName}</p>
  </div>
  )
}

export default NewsCategoryRegionTemplate