import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import { Redirect } from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post('http://localhost:8080/login', {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
        return (<Redirect push to="/" />);
    };

    useEffect(() => {
        Axios.get("http://localhost:8080/login").then((response) => {
            if(response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

    return (
        <div className="App">
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username..." onChange={(e) => { setUsername(e.target.value); }} />
                <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value); }} />
                <button onClick={login}>Login</button>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    );
}