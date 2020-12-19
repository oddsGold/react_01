import React from "react";
import {connect} from "react-redux";
import AuthForm from "./AuthForm";
import {compose} from "redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

function AuthFormContainer(props) {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.remember)
    }

    if(props.isAuth) {
        return <Redirect to={"/"} />
    }

    return (
        <AuthForm
            onSubmit={onSubmit}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            login
        })
)(AuthFormContainer);
