import React, { FC, useCallback, useEffect, useState } from 'react'
import clsx from  'clsx'
import Pagination from '@mui/material/Pagination'
import Button from '@mui/material/Button'
import { Helmet } from 'react-helmet'
import { IProject } from '../common/types/projects'
import { ProjectService } from '../services/project.service'
import { appConfig } from '../common/config'
import styles from './my-projects.module.scss'

export const MyProjects: FC = () => {
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number>(1)
  const [projects, setProjects] = useState<IProject[]>([])

  const fetchProjects = useCallback(async () => {
    const data = await ProjectService.getAll({page: page, limit: 10})
    setProjects(data.data)
    setPages(data.meta.pagination.pageCount)
  }, [page])

  const handleChange = (event: React.ChangeEvent<unknown>, value: React.SetStateAction<number>): void => {
    setPage(value)
  }

  useEffect(() => {
    void fetchProjects()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    void fetchProjects().then(() => {
      window.scrollTo(0, 0)
    })
    // eslint-disable-next-line
  }, [page])

  return (
    <div className={styles.myProjectsContainer}>
      <Helmet>
        <title>My Projects | William Hunt Jr</title>
      </Helmet>
      <div className={styles.myProjects}>
        {projects.length > 0 && projects.map((project, index) => 
        <div className={styles.myProject} key={index}>
          <div className={styles.myProjectContent}>
            <div className={styles.myProjectThumbnail}><img src={appConfig.API + project.attributes.thumbnail.data[0].attributes.url} alt=""/></div>
            <div className={styles.myProjectHeader}>{project.attributes.name}</div>
            <div className={styles.myProjectSubHeader}>Created with {project.attributes.created_with}</div>
            <div className={styles.myProjectBadges}>
              {project.attributes.coded &&
                <p className={clsx(styles.badge, styles.badgeSecondary)}>
                  Coded
                </p>
              }
              {project.attributes.designed &&
                <p className={clsx(styles.badge, styles.badgeSecondary)}>
                  Designed
                </p>
              }
              {project.attributes.converted_wireframe &&
                <p className={clsx(styles.badge, styles.badgeSecondary)}>
                  Converted wireframes
                </p>
              }
              {project.attributes.is_discontinued &&
                <p className={clsx(styles.badge, styles.badgeDiscontinued)}>
                  Discontinued
                </p>
              }
            </div>
            <div className={styles.myProjectDescription}>{project.attributes.description}</div>
            <div className={styles.buttonContainer}>
              {!project.attributes.is_discontinued &&
                <Button color="secondary" variant="text" href={project.attributes.url} className={styles.visitButton}>Visit Project</Button>
              }
            </div>
          </div>
        </div>
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination count={pages} onChange={handleChange} color="primary" />
      </div>
    </div>
  )
}