import React, { useEffect } from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {
    setUserDataAC,
    setCurrentUserAC
} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/Api";

function LoginContainer (props) {

    const getCurrentUser  = () => usersAPI.currentUser()
        .then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data; //деструктеризация
                props.setUserDataAC(id, email, login)
            }
        })

    //componentDidMount
    useEffect(() => {
        getCurrentUser();
        if (props.isAuth) {
            usersAPI.currentUserData(props.userId)
                .then(data => {
                    props.setCurrentUserAC(data.photos.small)
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

