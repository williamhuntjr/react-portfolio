import React, { FC, memo } from 'react'
import { Carousel } from 'react-responsive-carousel'
import clsx from  'clsx'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { appConfig } from '../../common/config'
import { IRecentProjects } from './recent-projects.types'
import styles from './recent-projects.module.scss'

export const RecentProjects: FC<IRecentProjects> = memo(({ data }) => {
  return (
    <div className={styles.recentProjects}>
      <div className={styles.recentProjectsHeaderContainer}>

      </div>

      <div className={styles.recentProjectsContainer}>
        {data !== undefined && 
        <Carousel showArrows={true} showThumbs={false} showStatus={false} className={styles.carouselSlider}>
          {data.slice(-3).map((project, i) => {
            return (
              <div className={styles.projectSlide} key={i}>
                <img src={`${appConfig.API}${project.attributes.thumbnail.data[0].attributes.url}`} alt="" />
                <p className={clsx("legend", styles.projectLegend)}>{project.attributes.name}</p>
              </div>
            )
          })}
          </Carousel>
        }
      </div>
    </div>
  )
})