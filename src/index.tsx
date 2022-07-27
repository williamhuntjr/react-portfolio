import React from 'react'
import ReactDOM from 'react-dom'
import { StylesProvider } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'
import { App } from './app'
import './assets/sass/general.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: '#cf2127',
    },
    secondary: {
      main: '#282828',
    },
  },
})

ReactDOM.render(
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>,
  document.getElementById('root')
)