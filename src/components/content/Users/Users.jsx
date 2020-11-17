import React from "react";
import './users.css'
import Wrapper from "../Wrapper";
import UsersList from "./UsersList";

const Users = (props) => {
    return(
        <Wrapper>
            <div className="users">
                <UsersList props={props.listUsers}/>
            </div>
        </Wrapper>
    )
}

export default Users;