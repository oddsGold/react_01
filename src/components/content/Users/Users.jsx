import React from "react";
import './users.css'
import Wrapper from "../Wrapper";
import UsersList from "./UsersList";
import axios from "axios";

const Users = (props) => {

    if(props.listUsers.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return(
        <Wrapper>
            <div className="users">
                <div className="users-title">
                    <h1>Users</h1>
                </div>
                <UsersList props={props.listUsers} sign={props.signUser} unsign={props.unsignUser}/>
            </div>
        </Wrapper>
    )
}

export default Users;