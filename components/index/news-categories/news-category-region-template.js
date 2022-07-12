import React from 'react'
import Link from 'next/link'

import styles from '../../../styles/news-categories/news-category-region-template.module.css'

const NewsCategoryRegionTemplate = ({path, regionLogo, regionName}) => {
  return (
    <>
    <Link href={path}>
      <a className={styles.regionLink}>
        <div className={styles.regionTemplate}>
            <img className={styles.regionLogo}src={regionLogo} />
            <p className={styles.regionName}>{regionName}</p>
      </div>
    </a>
  </Link>
  </>
  )
}

export default NewsCategoryRegionTemplate