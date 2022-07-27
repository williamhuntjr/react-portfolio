import React, { FC } from 'react'
import Button from '@mui/material/Button'
import styles from './expectations.module.scss'

export const Expectations: FC = () => {
  return (
    <div className={styles.expectations}>
      <div className={styles.headerContainer}>
        <p className={styles.expectationsHeader}>
            What can you expect?
        </p>
        <p className={styles.expectationsSubHeader}>
          As your web developer, I will...
        </p>
      </div>

      <div className={styles.expectationsContent}>
        <div className={styles.expectationsGrid}>
          <div className={styles.expectationsRow}>
            <div className={styles.expectationsCol}>
              <div className={styles.expactionsColData}>
                <img src="/assets/img/icons/estimate-cost.png" alt="" className={styles.cardIcon} />
                <p>Estimate the timeframe and cost upfront</p>
              </div>
            </div>
            <div className={styles.expectationsCol}>
              <div className={styles.expactionsColData}>
                <img src="/assets/img/icons/email-icon.png" alt="" className={styles.cardIcon} />
                <p>Email you a daily or weekly progress report</p>
              </div>
            </div>
          </div>
          <div className={styles.expectationsRow}>
            <div className={styles.expectationsCol}>
              <div className={styles.expactionsColData}>
                <img src="/assets/img/icons/urgent-requests.png" alt="" className={styles.cardIcon} />
                <p>Handle urgent requests when you get in touch</p>
              </div>
            </div>
            <div className={styles.expectationsCol}>
              <div className={styles.expactionsColData}>
                <img src="/assets/img/icons/be-available.png" alt="" className={styles.cardIcon} />
                <p>Be available to speak after hours</p>
              </div>
            </div>
          </div>
          <Button color="secondary" variant="contained" href="/lets-connect" className={styles.button}>Connect Now</Button>
        </div>
      </div>
    </div>
  )
}