import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                oddsGold
            </NavLink>
        </header>
    );
}
export default Header;