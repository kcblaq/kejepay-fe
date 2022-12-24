import React from 'react'
import { Typography, Box, Button, TextField, Input } from "@mui/material"
import { makeStyles } from '@mui/styles'
import logol from "./Assets/logol.svg"
import { Link } from 'react-router-dom'
import { maxHeight, styled } from '@mui/system';

function Footer() {
    const styles = useStyles()
  return (
    <Box sx={{}} className={styles.footer}>
    <Box sx={{ minHeight: '160px' }} className={styles.footerTop}>
      <Box sx={{display:'flex', flexDirection:'column', gap:2, width:'40%', marginRight:20 }}>
       
        {/* <Link to="/" > <img src={logol} alt="Kejepay" /> </Link> */}
        <Link to="/" className={styles.a} > 
        <Typography sx={{letterSpacing:2, fontWeight:900, fontSize:'36px' }}> KejePay</Typography> 
        </Link>
        <Typography sx={{fontWeight:600, fontSize:'16px'}}>
            Get in touch with us
        </Typography>
        <Typography sx={{fontSize:'12px'}}>
        Subscribe to our Newsletter!
        </Typography>
        <Input
        placeholder='Enter your email address' 
        label='Enter your email address'
        sx={{backgroundColor: 'white', borderRadius: 14, outline:'none', 
        borderWidth:'0px',
        padding:'10px'
       
    }}
        />
        <Button variant='contained' className={styles.btn}> Submit</Button>
      </Box>
      <Box sx={{width:'20%', display:'flex', flexDirection:'column', gap:2}}>
        <Typography className={styles.title} sx={{fontWeight:800, fontSize:'20px'}}>Company</Typography>
        <Link to='#' className={styles.a}> About Us</Link>
        <Link to='#'className={styles.a}> Our Offers</Link>
        <Link to='#'className={styles.a}> Terms Of Service</Link>
        <Link to='#'className={styles.a}> Private Policy </Link>
      </Box>
      <Box sx={{width:'20%', display:'flex', flexDirection:'column', gap:2}}>
        <Typography className={styles.title} sx={{fontWeight:800,fontSize:'20px'}}> Resources</Typography>
        <Link to='#' className={styles.a}> Blog </Link>
        <Link to='#' className={styles.a}> Testimonials </Link>
      </Box>
      <Box sx={{width:'20%', display:'flex', flexDirection:'column', gap:2}}>
        <Typography className={styles.title} sx={{fontWeight:800, fontSize:'20px'}}> Contact</Typography>
        <Link to='#' className={styles.a}> Contact Us </Link>
        <Link to='#' className={styles.a}> Help Center </Link>
      </Box>
    </Box>
    <Box>
      <hr />
      <Typography sx={{ paddingTop: 2, fontSize: '12px' }}>
        &copy; 2022 Kejepay. All rights Reserved
      </Typography>
    </Box>
  </Box>
  )
}

const useStyles = makeStyles(theme => ({   
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
        flex: '2 1 1 1',
        justifyContent: 'space-between',
        paddingBottom:'30px',
        [theme.breakpoints.down('sm')]:{
          flexDirection: 'column',
        }
      },
      btn:{
        
      },
      a:{
        color:'#fff',
        textDecoration:'none',
      },
      img: {
        height:'20%',
        width:'50%',
        border:'1px solid red'
      },
      title:{
        fontWeight:800,
        fontSize:'40px',
        width:'60%',
              }
      
}))

export default Footer