import React from 'react';
import leftnav from './LeftNavbar.module.css';

const LeftNavbar = () => {
    return (
        <nav className={leftnav.nav}>
            <ul>
                <li>
                    <a className={leftnav.active} href="">Profile</a>
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