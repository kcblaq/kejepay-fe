import React, { useEffect } from 'react'
import { Typography, Box,Button } from "@mui/material"
import { makeStyles } from '@mui/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

function HomeComponent() {

  const styles = useStyles()

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Box className={styles.container} data-aos="fade-left">
        <Box className={styles.contents}  >
          <Box className={styles.firstlayer}>
            <Box className={styles.left} data-aos="flip-down">
              <Typography className={styles.header} sx={{fontSize:{xs:'28px',sm:'32px', md:'48px', lg:'64px'}, lineHeight:{xs:'40px', sm:'50px', md:'70px', lg:'96px'}}}>
                Secure Escrow Payment Solution For All Your Transactions
              </Typography>
              <Typography className={styles.description} sx={{fontSize:{xs:'14px',sm:'16px', md:'24px', lg:'36px'}, lineHeight:{xs:'20px', sm:'24px', md:'32px', lg:'54px'}}}>
                Buy or sell any item without the fear of getting scammed of your money, products, or services.
              </Typography>
              <Button variant='contained' sx={{borderRadius:{xs:'10px',sm:'10px', md:'40px', lg:'50px'}, width:{xs:'100%', sm:'50%', md:'20%'}}}>
                  Get Started
              </Button>
            </Box>
            <Box className={styles.right} data-aos="fade-left">
              <img src="https://media.istockphoto.com/id/939533958/es/foto/de-confianza.jpg?s=612x612&w=0&k=20&c=aIxvyU8Bk2GtWPIgiCt14QqGlqi42KOTTHMLzaux7Lc="
              alt="Trust Image" 
              className={styles.img} />
            </Box>
          </Box>
          <Box >
            Hello
          </Box>
        </Box>
      </Box>

    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: '100%',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 8,
    // padding: '0px 40px',
    [theme.breakpoints.down('sm')]: {
      // padding: '0px 10px'
    },
  },
  contents: {
    padding: '20px 40px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px'
    },
  },
  firstlayer: {
    display: 'flex',
    padding: '30px 0px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingTop: '30px',
      justifyContent: 'start',
      gap: '30px'
    },
  },
  header: {
    fontWeight: 700, fontSize: '64px', lineHeight: '64px',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize:'24px',
    //   lineHeight:'46px',
    // },
    // [theme.breakpoints.down('md')]: {
    //   fontSize:'24px',
    //   lineHeight:'46px',
    // },
  },
  left:{
    display: 'flex',
    flexDirection: 'column',
    gap:'30px',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  right:{
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  img:{
    width: '100%',
    height: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  }

}))

export default HomeComponent