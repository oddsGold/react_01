import React from "react";
import {NavLink} from "react-router-dom";

const CurrentPerson = (props) => {
    let path = "/messages/" + props.id

    return(
        <div className="messages-list-item">
            <div className="messages-list-item-name">
                <NavLink to={path}>
                    { props.name }
                </NavLink>
            </div>
        </div>
    )
}
export default CurrentPerson;