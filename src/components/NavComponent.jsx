import React, { useState } from 'react'
import { Button, Typography, Box, Modal } from "@mui/material"
import { NavLink } from "react-router-dom"
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import logo from "../components/Assets/logo.svg"
import { AiOutlineMenu } from "react-icons/ai"
import Login from "./Login"
import Register from "./Register"


const Tabs = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Recources', link: '/api' },
  { name: 'Contact Us', link: '/contact' }
]


function NavComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);


  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false );


  const theme = useTheme()

  const styles = useStyles()

  const activeStyle = {
    color: '#7725C9',
    textDecoration: 'none',
    borderBottom: '3px solid #7725C9',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    paddingBottom: '3px',
    transition: '0.1s ease',
  }

  const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  let nonActive = {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'sans-serif',
  }
  const sec = import.meta.env.VITE_SECRET
// console.log(sec)
  return (
    <>
      <div className={styles.main} >
        <Box>
          <NavLink to="/"
            style={({ isActive }) => {
              isActive ? activeStyle : undefined
            }}
          >
            <img src={logo} alt="The Kejepay Logo" className={styles.logo} />
          </NavLink>
        </Box>

        <Box className={styles.menu}>
          {Tabs.map((menu) => {
            return (
              <NavLink to={menu.link}
                key={menu.name}
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActive
                }
              >
                <Typography>  {menu.name}</Typography>
              </NavLink>
            )
          })}
        </Box>


        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, gap: { sm: 2, md: 2, lg: 4 } }} >
          <Button variant='outlined' className={styles.btn} sx={{ borderRadius: '50px' }} onClick={handleOpenLogin} >
            Login 
          </Button>

          {/* Login modal starts here ... */}
          <Modal
            open={openLogin}
            onClose={handleCloseLogin}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Login Modal Here...
              </Typography>
            <Login />
            </Box>
          </Modal>


          <Button variant='contained'
            className={styles.btn}
            sx={{ borderRadius: '50px' }}
            onClick={handleOpenRegister}
          >
            Register
          </Button>
          <Modal
            open={openRegister}
            onClose={handleCloseRegister}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Register here ...
              </Typography>
              <Register />

            </Box>
          </Modal>

        </Box>

        <Box sx={{ display: { md: 'none' } }} >
          <i> <AiOutlineMenu onClick={handleOpen} /></i>
        </Box>

      </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className={styles.mobileMenu}>
            <Box className={styles.mobileMenu}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box onClick={handleClose} >
                  {Tabs.map((menu) => {
                    return (
                      <NavLink to={menu.link}
                        key={menu.name}
                        style={({ isActive }) =>
                          isActive ? activeStyle : nonActive
                        }
                      >
                        <Typography>  {menu.name}</Typography>
                      </NavLink>

                    )
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )


}


const useStyles = makeStyles(theme => ({


  main: {
    minHeight: '50px',
    maxWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px'
    }
  },
  menu: {
    display: 'flex',
    gap: '20px',
    [theme.breakpoints.down('900px')]: {
      gap: '5px'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  btn: {
    borderRadius: '50px'
  },
  mobileMenu: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  logo: {
    height: '30%',
    width: '70%'
  }
}))



export default NavComponent