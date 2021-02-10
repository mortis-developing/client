import React, {useEffect, useState} from "react";
import Axios from "axios";

import NormalUser from "../login-components/NormalUser";
import Writer from "../login-components/Writer";
import Admin from "../login-components/Admin";
import Registration from "../pages/Registration";

export default function Main() {
    const [role, setRole] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
       Axios.get("http://localhost:8080/login").then((response) => {
           if(response.data.loggedIn === true) {
               setRole(response.data.user[0].role);
               console.log(response.data.user[0].role);
           }
       });
    }, []);

    return (
        <>
            {role === "visitor" && <NormalUser />}
            {role === "writer" && <Writer />}
            {role === "admin" && <Admin />}
            {!role && <Registration />}
        </>
    );
}