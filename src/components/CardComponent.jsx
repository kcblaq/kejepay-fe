import React, { useEffect } from 'react'
import { Typography, Box, Button } from "@mui/material"
import { makeStyles } from '@mui/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import exchange from "../assets/exchange.svg"
import experience from "../assets/accesstrans.svg"
import transact from "../assets/transact.svg"


function CardComponent() {
    const data = [
        { icon: exchange, text: "Safely buy or sell products" },
        { icon: experience, text: "Experience transparency in all your business transactions" },
        { icon: transact, text: "Access your transactions from a dashboard in realtime" }
    ]

    const styles = useStyles()
    return (
        <Box className={styles.container}>
            {
                data.map((item, index) => {
                    return (
                        <Box className={styles.main}>
                            <img src={item.icon} alt={item.text} className={styles.icon}/>
                            <Typography> {item.text} </Typography>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        justifyContent:'space-around',
        width:'100%',
        marginTop: '50px',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            gap:'15px'
        }

    },
    main: {
        // borderRadius: '32px',
        display: 'flex',
        // justifyContent:'space-between',
        gap:'50px',
        // width:'100%',
        // height:'100%',
        alignItems:'start',
        flexDirection: 'column',
        height: '250px',
        width: '300px',
        border: '1px solid #5A5C5C',
        padding: '32px',
        [theme.breakpoints.down('sm')]:{
            height: '200px',
            width: '200px',
            padding: '20px',
        }
    },
    icon:{
        height: '88px',
        width: '88px',
    }
}))

export default CardComponent