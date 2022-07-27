import React, { FC } from 'react'
import logo from '../../assets/img/logo-symbol.png'
import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" className={styles.logoImage} />
      </div>
    </div>
  )
}