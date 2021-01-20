import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input, Textarea} from "../Сommon/FormsControls/Forms";
import {required} from "../Helpers/Validation/validation";

function ProfileInfoDataForm({handleSubmit, error, profile}) {
    return(
        <div className="content-description-profile-row">
            <form onSubmit={handleSubmit}>
                <div className="content-description-profile-contacts">
                    <p>Contacts:</p>
                    <ul>
                        {
                            Object.keys(profile.contacts).map((oneKey,i)=>{
                                return (
                                    <li key={i}>
                                        <strong>{oneKey}:</strong>
                                        <Field type="text" placeholder={oneKey} name={oneKey} component={Input} validate={[]}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <p>Description:</p>
                    <ul>
                        <li>
                            <strong>Full name:</strong>
                            <Field type="text" placeholder={"Full name"} name={"fullName"} component={Input} validate={[]}/>
                        </li>
                        <li>
                            <strong>lookingForAJob:</strong>
                            <Field type="checkbox" name={"lookingForAJob"} component={Input} validate={[]}/>
                        </li>
                        <li>
                            <strong>My skills:</strong>
                            <Field type="text" placeholder={"My skills"} name={"lookingForAJobDescription"} component={Textarea} validate={[]}/>
                        </li>
                        <li>
                            <strong>About me:</strong>
                            <Field type="text" placeholder={"About me"} name={"aboutMe"} component={Textarea} validate={[]}/>
                        </li>
                    </ul>
                </div>
                {error
                    ? <div className="list-error">{error}</div>
                    : ""
                }
                <button>Save</button>
            </form>
        </div>
    )
}

const ProfileInfoDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileInfoDataForm)

export default ProfileInfoDataReduxForm;