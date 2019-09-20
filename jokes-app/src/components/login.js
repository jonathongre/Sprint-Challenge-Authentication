import React, { useState } from 'react';
import axios from 'axios';

const Register = (props) => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const changeHandler = event => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:3300/api/auth/login';
        axios.post(endpoint, user)
            .then (res => {
                console.log('response data from login', res.data);
                props.history.push('/jokes');
            })
            .catch( err => {
                console.log('err from login', err);
            });
      }
        return (
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='form-input'>
                    <label>Username:</label>
                    <input name="username" value={user.username} onChange={changeHandler} type='text' />
                </div>
                <div className='form-input'>
                    <label>Password:</label>
                    <input name="password" value={user.password} onChange={changeHandler} type='password' />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        )
    }

export default Register;