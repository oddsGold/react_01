import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Textarea} from "../Сommon/FormsControls/Forms";
import {maxLength, minLength, required} from "../Helpers/Validation/validation";

const maxLength15 = maxLength(15)
const minLength5 = minLength(5)

function MessagesForm(props) {
    return(
        <div className="messages-textarea">
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter you message" validate={[required, maxLength15, minLength5]} />
                <input type="submit"/>
            </form>
        </div>
    )
}

const MessgaesReduxForm = reduxForm({
    fields: ['newMessageBody'],
    form: 'Messages'
})(MessagesForm)

export default MessgaesReduxForm;
