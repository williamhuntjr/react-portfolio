import React, { FC, useCallback, useEffect, useState } from 'react'
import Link from '@mui/material/Link'
import { makeStyles } from '@mui/styles'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import CollectionsIcon from '@mui/icons-material/Collections'
import DraftsIcon from '@mui/icons-material/Drafts'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IRoute } from '../../common/types/routing'
import styles from './sidebar.module.scss'

const useStyles = makeStyles({
  paper: {
    color: '#fff',
    backgroundColor: '#cf2127 !important'
  },
  selected: {
    backgroundColor: 'rgb(0,0,0,0.20) !important'
  },
  icon: {
    color: '#fff'
  }
})

export const Sidebar: FC = () => {
  const [state, setState] = useState(false)
  const [routes, setRoutes] = useState<IRoute[]>([])

  const classes = useStyles()

  const toggleDrawer = useCallback(() => {
    if (state) { 
      setState(false) 
      return
    }
    setState(true)
  }, [state])

  useEffect(() => {
    setRoutes([
      {
        label: "Home",
        icon: <HomeIcon />,
        path: "/"
      },
      {
        label: "My Projects",
        icon: <CollectionsIcon />,
        path: "/my-projects"
      },
      {
        label: "Lets Connect",
        icon: <DraftsIcon />,
        path: "/lets-connect"
      }
    ])
  }, [])

  return (
    <div>
      <div className={styles.menuToggle}>
        <Button 
          onClick={() => toggleDrawer()} 
          color="secondary"
          className={styles.toggleButton}
        >
          {state === true && <MenuOpenIcon />}
          {state === false && <MenuIcon />}
        </Button>
      </div>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={state}
          onClose={() => toggleDrawer()}
          classes={{ paper: classes.paper }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
            className={styles.sidebarContent}
          >

            <List className={styles.navList}>
              {routes.map((route, index) => (
                <ListItem button component={Link} key={index} href={route.path} selected={route.path === window.location.pathname} classes={{ selected: classes.selected }}>
                  <ListItemIcon className={classes.icon}>
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText primary={route.label} />
                </ListItem>
              ))}
            </List>
            <Divider className={styles.divider} />
            <List className={styles.navList}>
              <ListItem button component={Link} classes={{ selected: classes.selected }} href="https://www.github.com/williamhuntjr">
                <ListItemIcon className={classes.icon}>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItem>
              <ListItem button component={Link} classes={{ selected: classes.selected }} href="https://www.linkedin.com/in/williamhuntjr">
                <ListItemIcon className={classes.icon}>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  )
}