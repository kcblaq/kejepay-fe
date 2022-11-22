import React, {useEffect} from 'react'
import {Typography, Box} from "@mui/material"
import AOS from 'aos'
import 'aos/dist/aos.css'

function HomeComponent() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
        <Box sx={{height:"100vh", backgroundColor:"purple", color:"#FFF"}} data-aos="fade-left">
        <Typography>
            Here is my Home page
        </Typography>
        </Box>
        <Box sx={{height:"100vh", backgroundColor:"orange", color:"#FFF"}} data-aos="fade-right">
        <Typography>
            Here is my Home page
        </Typography>
        </Box>
        <Box sx={{height:"100vh", backgroundColor:"pink", color:"#FFF"}} data-aos="zoom-out">
        <Typography>
            Here is my Home page
        </Typography>
        </Box>
    </div>
  )
}

export default HomeComponent