import React from 'react';
import './LeftNavbar.css';

const LeftNavbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="">Profile</a>
                </li>
                <li>
                    <a href="">Messages</a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                    <a href="">Music</a>
                </li>
                <li>
                    <a href="">Settings</a>
                </li>
            </ul>
        </nav>
    );
}
export default LeftNavbar;