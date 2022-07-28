import React, { FC } from 'react'
import styles from './passions.module.scss'

export const Passions: FC = () => {
  return (
    <div className={styles.passions}>
      <div className={styles.passionsContainer}>
        <div className={styles.passionsHeroContainer}>
          <div className={styles.heroContent}>
            <img src="/assets/img/web-coder.png" alt="" />
          </div>
        </div>
        <div className={styles.passionsSkillsContainer}>
          <div className={styles.skillsContent}>
            <div className={styles.skillsHeader}>
              The things I enjoy the most.
            </div>
            <div className={styles.skillsSubHeader}>
              I may have a lot of different skills, but I have some that I enjoy more than others.
            </div>
          </div>
          <div className={styles.skillContainer}>
            <div className={styles.skillIcon}>
              <img src="/assets/img/icons/skills/psd-to-html.png" alt="" />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillHeader}>
                Design to HTML conversion
              </div>
              <div className={styles.skillDescription}>
                I will convert your <span className="boldText">Photoshop</span> or <span className="boldText">Sketch</span> designs to HTML using the <span className="boldText">Bootstrap 4</span>, <span className="boldText">Material UI</span>, or any other UI framework.
              </div>
            </div>
          </div>

          <div className={styles.skillContainer}>
            <div className={styles.skillIcon}>
              <img src="/assets/img/icons/skills/front-end-developer.png" alt="" />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillHeader}>
                Front-end JavaScript Development
              </div>
              <div className={styles.skillDescription}>
                I have always enjoyed writing code for UIs. I have experience with <span className="boldText">React.js</span> and <span className="boldText">WordPress</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}