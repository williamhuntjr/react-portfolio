import React, { FC } from 'react'
import { Sidebar } from './layout/sidebar/sidebar'
import { Main } from './layout/main/main'
import { Footer } from './layout/footer/footer'
import styles from './app.module.scss'

export const App: FC = () => {
  return (
    <div className={styles.headerContainer}>
      <Sidebar />
      <Main />
      <Footer />
    </div>
  )
}