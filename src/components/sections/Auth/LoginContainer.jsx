import React, {useEffect} from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {
    getCurrentUserTC,
    getCurrentUserDataTC, logout
} from "../../redux/auth-reducer";

function LoginContainer(props) {

    const getCurrentUser = () => props.getCurrentUserTC();

    //componentDidMount
    useEffect(() => {
        getCurrentUser();
        if (props.isAuth) {
            props.getCurrentUserDataTC(props.userId);
        }
    });

    return (
        <Login {...props} userImg={props.userImg} logout={props.logout}/>
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
        getCurrentUserTC,
        getCurrentUserDataTC,
        logout
    })(LoginContainer);

