import React from "react";
import { Field, reduxForm } from 'redux-form'
import posts from "./Posts.module.css";
import {maxLength, minLength, required} from "../Helpers/Validation/validation";
import {Textarea} from "../Сommon/FormsControls/Forms";

const maxLength15 = maxLength(15)
const minLength5 = minLength(5)

function PostForm(props) {

    return(
        <div className={posts['content-posts-create']}>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name="newPostBody" placeholder="Enter you message" validate={[required, maxLength15, minLength5]}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

const PostReduxForm = reduxForm({
    fields: ['newPostBody'],
    form: 'Posts'
})(PostForm)

export default PostReduxForm;