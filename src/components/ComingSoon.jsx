import React from 'react'
import {Box} from "@mui/material"
import { makeStyles } from '@mui/styles'
import AOS from 'aos'

function ComingSoonComponent() {

    const styles = useStyles()
  return (
    <Box className={styles.container}>
      The ABout Page
        
    </Box>
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

export default ComingSoonComponent