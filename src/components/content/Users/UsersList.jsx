import React from "react";
import './users.css'

const UsersList = (props) => {
    return (

        <div className="users-list">
            {
                props.props.map((user, i) =>
                    <div className="users-list-item" key={i}>
                        <p>{user.id}</p>
                        <p>{user.fullName}</p>
                        <p>{user.status}</p>
                        <p>{user.location.country}</p>
                        <p>{user.location.city}</p>
                    </div>
                )
            }
        </div>
    )
}
export default UsersList;