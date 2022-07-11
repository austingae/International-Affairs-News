import React from 'react'
import Image from 'next/image'

import styles from '../../../styles/news-categories/news-category-region-template.module.css'

const NewsCategoryRegionTemplate = ({regionLogo, regionName}) => {
  return (
    <div className={styles.newsCategoryRegionTemplate}>
      <Image 
      src={regionLogo}
      width='50px'
      height='50px'
      />
      <p className={styles.regionName}>{regionName}</p>
  </div>
  )
}

export default NewsCategoryRegionTemplate