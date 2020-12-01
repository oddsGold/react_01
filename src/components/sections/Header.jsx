import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import LoginContainer from "./Auth/LoginContainer";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                oddsGold
            </NavLink>
            <LoginContainer />
        </header>
    );
}
export default Header;