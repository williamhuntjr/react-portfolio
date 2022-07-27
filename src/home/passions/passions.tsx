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
              The stuff I'm really good at.
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
                I will convert your <span className="alertText">Photoshop</span> or <span className="alertText">Sketch</span> designs to HTML using the <span className="alertText">Bootstrap 4</span>, <span className="alertText">Material UI</span>, or any other UI framework.
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
                I have always enjoyed writing code for UIs. I have experience with <span className="alertText">React.js</span> and <span className="alertText">WordPress</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}