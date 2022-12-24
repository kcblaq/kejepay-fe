import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../feature/auth/tokenSlice';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { header } from '../utils/header';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('')

    if (message === 'OK') setMessage('You have successfully logged in')
    const dispatch = useDispatch()
    const myToken = useSelector((state) => state.token)
    // console.log(myToken)



    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/user/login', { email: email, password: password }, { header }
        )
            .then(function (res) {
                console.log(res);
                setEmail('');
                setPassword('');
                dispatch(getToken(token))
                localStorage.setItem('token', res.data.token);
                setSuccess(true)
                setMessage(res.status === 200 ? "You have successfully logged in" : null)
                toast.success('You have successfully logged in')
            })
            .catch((error) => {
                setMessage(error.response.data.message)
                console.error(error.response.data.message)
                toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
            })
    }

    return (
        <>
            {
                success ? (
                    <div>

                        <h1>Logged in successfully</h1>
                        <p>Please check your email for a link to log in</p>
                        <ToastContainer />
                    </div>

                ) : (
                    <section>
                        <ToastContainer />
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email"> Email:</label>
                            <input type="text" email="email" id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                autoComplete='false'
                            />
                            <label htmlFor="password"> Password:</label>
                            <input type="password" name="password" id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                            <button>
                                Login
                            </button>
                            {/* <Button variant='contained' onClick={() => dispatch(getToken(prompt("Enter token") ))}> See token</Button> */}
                        </form>


                    </section>
                )
            }
        </>
    )
}

export default Login