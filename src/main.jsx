import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import {Provider} from "react-redux"
import { store } from './store'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: '#7725C9'
    },
    secondary: {
      main: '#DEC9E9'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
      <App />
      </Provider>
       
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
