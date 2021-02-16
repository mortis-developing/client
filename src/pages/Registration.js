import '../assets/css/Registration.css';

import React, {useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function App() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [emailReg, setEmailReg] = useState('');

    Axios.defaults.withCredentials = true;
    let history = useHistory();

    const register = () => {
        Axios.post('http://192.168.2.100:8080/register', {
            username: usernameReg,
            password: passwordReg,
            email: emailReg
        }).then((response) => {

            if(response.data.message) {
                console.log("trying to create " + usernameReg + " failed with error 1");
            }

            console.log("user " + usernameReg + " was created.");
            history.push('/login');
        });
    }

    return (
        <div className="reg">
            <div className="reg-inner">
                <div className="span-div"><span className="material-icons" id="span-top">check</span></div>
                <div className="reg-head">
                    <h3>Join over 25 million lerners from around the global</h3>
                    <p>Master the language of the web: HTML, CSS, and Javascript. This path will prepare you to build basic
                        websites and then build interactive web apps</p>
                </div>
                <input type="email" name="email" placeholder="Enter your E-Mail" onChange={(e) => { setEmailReg(e.target.value); }}/><br />
                <input type="text" name="username" placeholder="Enter your username"  onChange={(e) => { setUsernameReg(e.target.value); }}/><br />
                <input type="password" name="password" placeholder="Enter your password"  onChange={(e) => { setPasswordReg(e.target.value); }}/>
                <div className="terms">
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"/>
                    </label>
                    <p>I agree to all statements include in <a href="#">Terms of Use</a></p>
                </div>
                <input type="submit" name="submit" value="Start coding now" onClick={register}/>
                <div className="bottom">
                    <p>Or continue with these social profile</p>
                    <picture>
                        <source srcSet='/images/light/registration/github.svg' media="(prefers-color-scheme: light)"/>
                        <img src='/images/light/registration/github.svg' alt="google"/>
                    </picture>
                    <picture>
                        <source srcSet='/images/light/registration/github.svg' media="(prefers-color-scheme: light)"/>
                        <img src='/images/light/registration/github.svg' alt="google"/>
                    </picture>
                    <picture>
                        <source srcSet='/images/light/registration/github.svg' media="(prefers-color-scheme: light)"/>
                        <img src='/images/light/registration/github.svg' alt="google"/>
                    </picture>
                    <picture>
                        <source srcSet='/images/light/registration/github.svg' media="(prefers-color-scheme: light)"/>
                        <img src="/images/dark/registration/github.svg" alt="google"/>
                    </picture>
                </div>
            </div>
        </div>
      );
}