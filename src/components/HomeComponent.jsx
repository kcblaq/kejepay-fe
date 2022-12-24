import React, { useEffect } from 'react'
import { Typography, Box, Button } from "@mui/material"
import { makeStyles } from '@mui/styles'
import CardComponent from './CardComponent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Login from './Login'
import Timeline from './timeline/Timeline'
import Footer from './Footer'


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
              <Typography className={styles.header} sx={{ fontSize: { xs: '28px', sm: '32px', md: '48px', lg: '64px' }, lineHeight: { xs: '40px', sm: '50px', md: '70px', lg: '96px' } }}>
                Secure Escrow Payment Solution For All Your Transactions
              </Typography>
              <Typography className={styles.description} sx={{ fontSize: { xs: '14px', sm: '16px', md: '24px', lg: '36px' }, lineHeight: { xs: '20px', sm: '24px', md: '32px', lg: '54px' } }}>
                Buy or sell any item without the fear of getting scammed of your money, products, or services.
              </Typography>
              <Button variant='contained' sx={{ borderRadius: { xs: '10px', sm: '10px', md: '40px', lg: '50px' }, width: { xs: '100%', sm: '50%', md: '20%' } }}>
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
            <Box className={styles.secondlayer}>
              <Typography sx={{
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '28px',
                color: '#000000'
              }} className={styles.whatyoucangain}> What You Can Gain </Typography>
              <Typography sx={{
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '47px',
                color: '#000000'
              }} className={styles.getstarted}> What we offer at Kejepay </Typography>
              <Box sx={{ width: '100%' }}>
                <CardComponent />

              </Box>

            </Box>

          </Box>
          <Box >
            <Box className={styles.secondlayer}>
              <Typography sx={{
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '28px',
                color: '#000000'
              }} className={styles.whatyoucangain}> How It Works </Typography>
              <Typography sx={{
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '47px',
                color: '#000000'
              }} className={styles.getstarted}> Get Started with These Five Easy Steps</Typography>
              <Box sx={{ width: '100%' }}>
                <Timeline />

              </Box>
              <Button variant='contained' sx={{ borderRadius: '5px' }} > Get Started</Button>
            </Box>

          </Box>

         {/* <Footer /> */}

        </Box>
      </Box>

    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: '100%',

    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 8,
    // padding: '0px 40px',
    [theme.breakpoints.down('sm')]: {
      // padding: '0px 10px'
    },
  },
  contents: {
    // padding: '20px 40px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px'
    },
  },
  firstlayer: {
    display: 'flex',
    padding: '50px',
    backgroundColor: theme.palette.secondary.main,
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingTop: '30px',
      justifyContent: 'start',
      gap: '30px'
    },
  },
  footer: {
    minHeight: '175px',
    backgroundColor: theme.palette.primary.main,
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    flex: '4 1',
    color: '#FFF'
  },
  footerTop: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
    }
  },
  secondlayer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '90px 30px'
  },
  whatyoucangain: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '28px',
    color: '#000000'
  },
  getstarted: {
    fontSize: '48px',
    fontWeight: 'bold',
    // lineHeight: '47px',
  },
  header: {
    fontWeight: 700, fontSize: '64px', lineHeight: '64px',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '30px'
    },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize:'24px',
    //   lineHeight:'46px',
    // },
    // [theme.breakpoints.down('md')]: {
    //   fontSize:'24px',
    //   lineHeight:'46px',
    // },
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '60%',
    paddingRight: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingRight: '0px',
    },
  },
  right: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  img: {
    width: '100%',
    height: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  }

}))

export default HomeComponent