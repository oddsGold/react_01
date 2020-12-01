import React from 'react';
import '../Header.css';
import {NavLink} from "react-router-dom";

const Login = (props) => {
    console.log(props.isAuth);
    console.log(props.login);
    return (
        <div className="login">
            <img src={props.userImg ? null : 'https://cdn.onlinewebfonts.com/svg/img_131793.png'} alt=""/>
            {
                props.isAuth ? 'Your login:'+props.login : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    );
}
export default Login;