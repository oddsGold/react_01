import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../Сommon/FormsControls/Forms";
import {required} from "../Helpers/Validation/validation";

function LoginForm({handleSubmit, error}){
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <Field type="text" placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type="text" placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <label htmlFor="checkbox">Remember me</label>
                    <Field type="checkbox" placeholder={"checkbox"} name={"remember"} component={Input} />
                </div>
                {error
                    ? <div className="list-error">{error}</div>
                    : ""
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;