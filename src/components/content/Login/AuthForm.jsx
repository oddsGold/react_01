import React from "react";
import Wrapper from "../Wrapper";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

function AuthForm(props) {
    const onSubmit = (formData) => {
        console.log(formData);
        login(formData.login, formData.password, formData.remember)
    }
    return (
        <Wrapper>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Wrapper>
    )
}

export default connect(null, {
    login
})(AuthForm);