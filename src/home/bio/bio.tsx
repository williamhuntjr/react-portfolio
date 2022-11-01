import React, { FC } from 'react'
import Button from '@mui/material/Button'
import styles from './bio.module.scss'

export const Bio: FC = () => {
  return (
    <div className={styles.bio}>
      <div className={styles.bioContent}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <p className={styles.bioHeader}>
              Hi there. <br className={styles.bioTitleBreak} />I am William.
            </p>
            <p className={styles.bioSubHeader}>
              I am a Full Stack Developer.
            </p>
            <p className={styles.bodyParagraph}>
              Hi, <span className="alertText">my name is William Hunt Jr</span>. I love my job and my customers. I enjoy writing code in all languages, but my primary focus is front-end <span className="boldText">React.js</span> development. While I enjoy coding mostly front-end, I also have experience with REST API development. I am proficient with <span className="boldText">Python/Flask</span> for custom API development.
            </p>
            <p className={styles.bodyParagraph}>
              I enjoy building web applications and websites and have been doing it since I was just a kid. I strive to improve my skills and learn something new everyday.
            </p>
            <div className={styles.bioLinks}>
              <Button color="secondary" variant="contained" href="https://www.github.com/williamhuntjr" className={styles.bioButton}>View GitHub</Button>
              <Button color="primary" variant="contained" href="/my-projects">View Projects</Button>
            </div>
          </div>
        </div>
        <div className={styles.bioContainer}>
          <img src="/assets/img/william-hunt-vector-2.png" alt="" className={styles.bioPhoto} />
          <img src="/assets/img/william-hunt-vector-3.png" alt="" className={styles.bioAvatar} />
        </div>
      </div>

    </div>
  )
}