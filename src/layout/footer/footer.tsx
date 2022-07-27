import React, { FC } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import styles from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerIconContainer}>
          <a href="https://www.github.com/huntdesignco"><GitHubIcon className={styles.footerIcon}/></a>
        </div>
        <div className={styles.footerIconContainer}>
          <a href="https://www.linkedin.com/in/huntdesignco"><LinkedInIcon className={styles.footerIcon}/></a>
        </div>
        <div className={styles.footerIconContainer}>
          <a href="tel://17575068279"><PhoneIphoneIcon className={styles.footerIcon}/></a>
        </div>
      </div>
    </div>
  )
}