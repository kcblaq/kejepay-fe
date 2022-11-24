import React, {useEffect} from 'react'
import {Typography, Box} from "@mui/material"
import { makeStyles } from '@mui/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

function NotFoundComponent() {

  const styles = useStyles()

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
        <Box className={styles.container} data-aos="fade-left">
        <Typography>
            Not Found
        </Typography>
        </Box>
       
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container:{
      minHeight: '80vh',
      maxWidth: '100%',
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 8,
      // padding: '0px 40px',
      [theme.breakpoints.down('sm')]: {
        // padding: '0px 10px'
      },
    },
  }))

export default NotFoundComponent