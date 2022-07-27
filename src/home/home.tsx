import React, { FC, useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { ProjectService } from '../services/project.service'
import { IProject } from '../common/types/projects'
import { Bio } from './bio/bio'
import { Why } from './why/why'
import { Expectations } from './expectations/expectations'
import { RecentProjects } from './recent-projects/recent-projects'
import { Passions } from './passions/passions'
import { Skillset } from './skillset/skillset'
import styles from './home.module.scss'

export const Home: FC = () => {
  const [projects, setProjects] = useState<IProject[]>()

  const fetchProjects = useCallback(async () => {
    const data = await ProjectService.getAll({page: 1, limit: 3})
    setProjects(data.data)
  }, [])

  useEffect(() => {
    void fetchProjects()
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.homeContainer}>
      <Helmet>
          <title>Web Development | William Hunt Jr</title>
      </Helmet>
      <Bio />
      <Why />
      <Expectations />
      <RecentProjects data={projects}/>
      <Passions />
      <Skillset />
    </div>
  )
}
