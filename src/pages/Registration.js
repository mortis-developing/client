import React, {useEffect, useState} from 'react';
import Axios from 'axios';

export default function App() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [emailReg, setEmailReg] = useState('');

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post('http://localhost:8080/register', {
            username: usernameReg,
            password: passwordReg,
            email: emailReg
        }).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" onChange={(e) => { setUsernameReg(e.target.value); }} />
                <label>E-Mail</label>
                <input type="email" onChange={(e) => { setEmailReg(e.target.value); }} />
                <label>Password</label>
                <input type="password" onChange={(e) => { setPasswordReg(e.target.value); }} />
                <button onClick={register}>Register</button>
            </div>
        </div>
      );
}