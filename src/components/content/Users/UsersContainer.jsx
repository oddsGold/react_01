import React from "react";
import UsersApiComponent from "./UsersApiComponent";
import PaginationContainer from "../../sections/pagination/PaginationContainer";
import {
    setUsersActionCreator,
    signNewUserActionCreator,
    unsignNewUserActionCreator,
    setCurrentPageCreator,
    setUsersCountActionCreator
} from "../../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        listUsers: state.usersPage.listUsers,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        signUser: (userId) => {
            dispatch(signNewUserActionCreator(userId));
        },
        unsignUser: (userId) => {
            dispatch(unsignNewUserActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCreator(pageNumber))
        },
        setUsersCount: (count) => {
            dispatch(setUsersCountActionCreator(count))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;