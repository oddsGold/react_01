import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import LoginContainer from "./Auth/LoginContainer";

function Header(props) {
    return (
        <header className="header">
            <NavLink to="/">
                oddsGold
            </NavLink>
            <LoginContainer
                userImg={props.userImg}
                isAuth={props.isAuth}
                login={props.login}
            />
        </header>
    );
}
export default Header;