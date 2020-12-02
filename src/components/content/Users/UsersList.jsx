import React from "react";
import {NavLink} from "react-router-dom";
import './users.css'
import axios from "axios";

let UsersList = (props) => {
        let pages = [];
        for(let i=1; i <= props.pagesCount; i++){
            pages.push(i);
        }

        return (
            <div className="users-list">
                {
                    props.props.map((user, i) => (
                        <div className="users-list-item" key={user.id}>
                            <div className="users-list-item-row">
                                <div className="users-list-item-row-link">
                                    <NavLink to={'/profile/'+user.id}>
                                        <div className="users-list-item-row-link-icon">
                                            <img
                                                src={user.photos.small != null ? user.photos.small : "https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png"}
                                                alt=""/>
                                        </div>
                                    </NavLink>
                                    <div className="users-list-item-row-link-btn">
                                        {user.followed
                                            ? <p onClick={() => {

                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":"2c577295-76a6-4359-90ab-7b313675fa27"
                                                    }
                                                }).then(response => {
                                                    if(response.data.resultCode === 0){
                                                        props.sign(user.id);
                                                    }
                                                })

                                            }}>UnFollow</p>
                                            : <p onClick={() => {

                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":"2c577295-76a6-4359-90ab-7b313675fa27"
                                                    }
                                                }).then(response => {
                                                    if(response.data.resultCode === 0){
                                                        props.unsign(user.id);
                                                    }
                                                })

                                            }}>Follow</p>
                                        }
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
                    ))
                }
            </div>
        )
    }

export default UsersList;