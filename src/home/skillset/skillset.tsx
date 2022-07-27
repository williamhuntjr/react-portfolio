import React, { FC } from 'react'
import styles from './skillset.module.scss'

export const Skillset: FC = () => {
  return (
    <div className={styles.skillset}>
      <div className={styles.skillsetBodyContainer}>
        <div className={styles.bodyContent}>
          <div className={styles.skillsetHeader}>
            I am versatile.
          </div>
          <div className={styles.skillsetSubHeader}>
            From back-end to front-end.
          </div>
          <div className={styles.bodyParagraph}>
            I have been managing Linux operating systems since I was just a kid. I am an experienced <span className="boldText">Redhat Linux</span> system administrator with 7+ years experience. I use Ansible and Jenkins for process automation. I have experience managing servers in <span className="boldText">Amazon Web Services</span>. 
          </div>
          <div className={styles.bodyParagraph}>
            I have worked primarily as a DevOps Engineer, but I code in my free time. I have been writing <span className="boldText">HTML</span>, <span className="boldText">CSS</span>, and <span className="boldText">JavaScript</span> now for over 15 years. Currently, I am working full-time as a <span className="boldText">React Developer</span>.
          </div>
        </div>
      </div>
      <div className={styles.skillsetIconsContainer}>
        <div className={styles.iconsContent}>
          <div className={styles.skillsetIconRow}>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/aws-skill.png" alt="" />
            </div>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/nginx-skill.png" alt="" />
            </div>
          </div>
          <div className={styles.skillsetIconRow}>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/html-css-js-skill.png" alt="" />
            </div>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/photoshop-skill.png" alt="" />
            </div>
          </div>
          <div className={styles.skillsetIconRow}>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/bootstrap-skill.png" alt="" />
            </div>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/material-ui-skill.png" alt="" />
            </div>
          </div>
          <div className={styles.skillsetIconRow}>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/reactjs-skill.png" alt="" />
            </div>
            <div className={styles.skillsetIconContainer}>
              <img src="/assets/img/icons/skills/python-skill.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}