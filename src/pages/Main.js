import React, {useEffect, useState} from "react";
import Axios from "axios";

import NormalUser from "../login-components/NormalUser";
import Writer from "../login-components/Writer";
import Admin from "../login-components/Admin";
import Login from "../pages/Login";

import { useHistory } from 'react-router-dom';

export default function Main() {

    const [isLoading, setLoading] = useState(true);

    const [role, setRole] = useState("");

    Axios.defaults.withCredentials = true;
    let history = useHistory();

    useEffect(() => {
       Axios.get("http://192.168.2.106:8080/login").then((response) => {
           if(response.data.loggedIn === true) {
               setRole(response.data.user[0].role);

               const loader = document.querySelector('.loader');
               if(loader) {
                   loader.remove();
                   setLoading(false);
               }
           } else {
                history.push('/login');
           }
       });
    }, []);

    if(isLoading) {
        return null;
    }

    return (
        <>
            {role === "visitor" && <NormalUser />}
            {role === "writer" && <Writer />}
            {role === "admin" && <Admin />}
            {!role && <Login />}
        </>
    );
}