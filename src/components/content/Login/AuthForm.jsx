import React from "react";
import Wrapper from "../Wrapper";
import LoginReduxForm from "./LoginForm";

function AuthForm(props) {

    return (
        <Wrapper>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={props.onSubmit}/>
        </Wrapper>
    )
}

export default AuthForm;