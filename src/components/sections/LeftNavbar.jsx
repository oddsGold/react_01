import React from 'react';
import './LeftNavbar.css';
import {NavLink} from "react-router-dom";

const LeftNavbar = () => {
    return (
        <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>
        </nav>
    );
}
export default LeftNavbar;