import React, { FC } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import styles from './main.module.scss'

export const Main: FC = () => {
  return (
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, key) => (
            <Route key={key} path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
