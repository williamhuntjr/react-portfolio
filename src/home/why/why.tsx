import React, { FC } from 'react'
import styles from './why.module.scss'

export const Why: FC = () => {
  return (
    <div className={styles.why}>
      <p className={styles.whyHeader}>
        Why should you choose me?
      </p>
      <p className={styles.whySubHeader}>
        Here are just a few reasons...
      </p>
      <div className={styles.cardList}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              I'm quick
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardAvatar}>
                <img src="/assets/img/icons/fast-delivery.png" alt="" />
              </div>
              <div className={styles.cardSubHeader}>
                I am fast
              </div>
              <div className={styles.cardParagraph}>
                I work quickly to provide mockups.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              I'm reliable
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardAvatar}>
                <img src="/assets/img/icons/reliable.png" alt="" />
              </div>
              <div className={styles.cardSubHeader}>
                You can depend on me
              </div>
              <div className={styles.cardParagraph}>
                I keep in touch with my customers. 
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              I will deploy it
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardAvatar}>
                <img src="/assets/img/icons/cheap-hosting.png" alt="" />
              </div>
              <div className={styles.cardSubHeader}>
                Power at an affordable price
              </div>
              <div className={styles.cardParagraph}>
                I will host your application and support it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}