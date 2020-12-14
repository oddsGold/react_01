import React from "react";
import Wrapper from "../Wrapper";
import LoginReduxForm from "./LoginForm";

function AuthForm(props) {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <Wrapper>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Wrapper>
    )
}
export default AuthForm;