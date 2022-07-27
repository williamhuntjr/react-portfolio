import React from 'react'
import { Home } from './home/home'
import { LetsConnect } from './lets-connect/lets-connect'
import { MyProjects } from './my-projects/my-projects'

export interface IAppRoute {
  path: string
  title: string
  component: React.ReactElement<{}>
}

export const IAppRoutes: IAppRoute[] = [
  {
    path: '/',
    title: 'Home',
    component: <Home />,
  },
  {
    path: '/lets-connect',
    title: 'Lets Connect',
    component: <LetsConnect />,
  },
  {
    path: '/my-projects',
    title: 'My Projects',
    component: <MyProjects />,
  },
]

export const AppRoutes = IAppRoutes