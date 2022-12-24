import { Button } from '@mui/material';
import React, {useState} from 'react'
import axios from 'axios';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
       axios.post('http://localhost:5000/user', {name: name, email: email, phone: phone, password: password})
       .then((res)=> console.log(res.status));
        
        return (
            <h2> You have signed up successfully</h2>
        )
    }
  return (
    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name}  onChange={(e) => setName(e.target.value)}/><br/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)}/> <br/>

            <label htmlFor="phone" > Phone</label>
            <input type="number" name="phone" id="phone" value={phone}  onChange={(e) => setPhone(e.target.value)}/> <br/>

            <label htmlFor="password" > Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>

            <Button variant='contained' onClick={handleSubmit} > Register</Button>

        
        </form>
    </div>
  )
}

export default Register