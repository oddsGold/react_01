import React from "react";

function ProfileInfoData(props) {
    return(
        <div className="content-description-profile-row">
            <div>
                {props.isOwner &&
                <button onClick={() => props.goToEditMode()}>
                    Change info profile
                </button>
                }
            </div>
            <div className="content-description-profile-contacts">
                <p>Contacts:</p>
                <ul>
                    {
                        Object.keys(props.profile.contacts).map((oneKey,i)=>{
                            return (
                                <li key={i}>{oneKey}:{props.profile.contacts[oneKey]}</li>
                            )
                        })
                    }
                </ul>
                <p>Description:</p>
                <ul>
                    <li>
                        Full name:
                        <strong>
                            <p>
                                {props.profile.fullName}
                            </p>
                        </strong>
                    </li>
                    <li>
                        lookingForAJob: <strong>{ props.profile.lookingForAJob ? "Yes" : "No" }</strong>
                        {
                            props.profile.lookingForAJob &&
                            <div>
                                My skills: <strong>{props.profile.lookingForAJobDescription}</strong>
                            </div>
                        }
                    </li>
                    <li>
                        About me: <strong>{ props.profile.aboutMe }</strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ProfileInfoData;