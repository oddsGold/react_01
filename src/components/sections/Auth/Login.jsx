import React from 'react';
import '../Header.css';
import {NavLink} from "react-router-dom";

function Login(props){
    let loginButton;
    if (!props.isAuth) {
        loginButton = '';
    } else {
        if (props.userImg === null) {
            loginButton = <img src='https://cdn.onlinewebfonts.com/svg/img_131793.png' alt=""/>;
        }else {
            loginButton = <img src={props.userImg} alt=""/>;
        }
    }

    return (
        <div className="login">
            {loginButton}
            {props.isAuth
                ? <div>Your login: {props.login} <button onClick={props.logout}>LogOut</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    )
}
export default Login;