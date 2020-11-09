import React from "react";
import {NavLink} from "react-router-dom";

const CurrentPerson = (props) => {
    // let path = "/messages/" + props.id

    return(
        <>
            {
                props.props.map((post, i) => (
                <NavLink to={"/messages/" + post.id} key={i} className="messages-list-item">
                    <div className="messages-list-item-name">
                        <p id={post.id}>
                            { post.name }
                        </p>
                    </div>
                </NavLink>
                ))
            }
        </>
    )
}
export default CurrentPerson;