import React from "react";
import {connect} from "react-redux";
import AuthForm from "./AuthForm";
import {compose} from "redux";
import {login} from "../../redux/auth-reducer";

function AuthFormContainer(props) {
    const onSubmit = (formData) => {
        // console.log(formData.login, formData.password, formData.remember)
        login(formData.login, formData.password, formData.remember)
    }
    return (
        <AuthForm
            onSubmit={onSubmit}
        />
    )
}

// let mapStateToProps = (state) => {
//     return {}
// }


export default connect(null, {
    login
})(AuthFormContainer);
