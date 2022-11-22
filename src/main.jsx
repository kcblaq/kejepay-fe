import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
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

        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
