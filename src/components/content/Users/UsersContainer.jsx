import React from "react";
import Users from "./Users";
import {setUsersActionCreator, signNewUserActionCreator, unsignNewUserActionCreator} from "../../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        listUsers: state.usersPage.listUsers,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        singUser: (userId) => {
            dispatch(signNewUserActionCreator(userId));
        },
        unsignUser: (userId) => {
            dispatch(unsignNewUserActionCreator(userId))
        },
        setUsers: (users) => {
         dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;