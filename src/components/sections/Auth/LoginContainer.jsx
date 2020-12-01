import React, { useState, useEffect } from "react";
import Login from "./Login";
import axios from "axios";
import {connect} from "react-redux";
import {
    setUserDataAC,
    setCurrentUserAC
} from "../../redux/auth-reducer";

let LoginContainer = (props) => {

    const getCurrentUser  = () => axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data; //деструктеризация
                props.setUserDataAC(id, email, login)
            }
        })

    //componentDidMount
    useEffect(() => {
        getCurrentUser();
        if (props.isAuth) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+props.userId)
                .then(response => {
                    props.setCurrentUserAC(response.data.photos.small)
                })
        }
    });

    return(
        <Login {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        userImg: state.auth.currentUserImg,
    }
}

export default connect(mapStateToProps,
    {
        setUserDataAC: setUserDataAC,
        setCurrentUserAC: setCurrentUserAC
    })(LoginContainer);

