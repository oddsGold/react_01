import React from 'react';
import './LeftNavbar.css';
import {NavLink} from "react-router-dom";

function LeftNavbar (props) {
    return (
        <nav className="nav">
                <ul>

                    {
                        props.menuItems.map((item, i) => (
                            <li>
                                <NavLink key={item.id} to={item.link}>{item.name}</NavLink>
                            </li>
                        ))
                    }

                </ul>
        </nav>
    );
}
export default LeftNavbar;