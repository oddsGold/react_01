import React from "react";
import './users.css'

const UsersList = (props) => {

    return (
        <div className="users-list">
            {
                props.props.map((user, i) =>
                    <div className="users-list-item" key={user.id}>
                        <div className="users-list-item-row">
                            <div className="users-list-item-row-link">
                                <div className="users-list-item-row-link-icon">
                                    <img src={ user.photos.small !=null ? user.photos.small : "https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png"} alt=""/>
                                </div>
                                <div className="users-list-item-row-link-btn">
                                    {user.followed ? <p onClick={() => {props.unsign(user.id)}}>Follow</p> : <p onClick={() => {props.sign(user.id)}}>UnFollow</p>}
                                </div>
                            </div>
                            <div className="users-list-item-row-info">
                                <div className="users-list-item-row-info-left">
                                    <p>
                                        {user.name}
                                    </p>
                                    <p>
                                        {user.status != null ? user.status : "status: null"}
                                    </p>
                                </div>
                                <div className="users-list-item-row-info-right">
                                    <p>{"user.location.country"}</p>
                                    <p>{"user.location.city"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default UsersList;