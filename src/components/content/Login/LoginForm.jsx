import React from "react";
import { Field, reduxForm } from 'redux-form'

function LoginForm(props){
    return(
        <div className="login-form">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field type="text" placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <label htmlFor="checkbox">Remember me</label>
                    <Field type="checkbox" placeholder={"checkbox"} name={"remember"} component={"input"}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    fields: ['login', 'password', 'remember'],
    form: 'login'
})(LoginForm)

export default LoginReduxForm;