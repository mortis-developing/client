import '../assets/css/Login.css';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import { useHistory } from 'react-router-dom';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    Axios.defaults.withCredentials = true;
    let history = useHistory();

    const login = () => {
        Axios.post('http://192.168.2.106:8080/login', {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
                history.push('/');
            }
        });
    };

    useEffect(() => {
        Axios.get("http://192.168.2.106:8080/login").then((response) => {
            if(response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

    return (
        <div className="login">
            <div className="login-inner">
                <div className="span-div"><span className="material-icons" id="span-top">check</span></div>
                <div className="login-head">
                    <h3>Welcome back</h3>
                    <p>Please enter your username and password to sign in to your account. If you dont know your username you can use the email address of your account.</p>
                </div>
                <input type="text" name="username" placeholder="Enter your username" onChange={(e) => { setUsername(e.target.value); }} /><br />
                <input type="password" name="password" placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value); }}/>
                <input type="submit" name="submit" value="SIGN IN" onClick={login} />
            </div>
        </div>
    );
}