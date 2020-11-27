import React from "react";
import '../Users/users.css'
import Preloader from "../../sections/preloader";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader />
    }

    return(
        <div className="profileinfo">
            <div className="content-images">
                <img src="https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg" alt=""/>
            </div>
            <div className="content-description">
                <div className="content-description-profile">
                    <div className="content-description-profile-row">
                        <div className="content-description-profile-avatar">
                            <img src={props.profile.photos.small} alt=""/>
                        </div>
                        <div className="content-description-profile-name">
                            <p>
                                {props.profile.fullName}
                            </p>
                        </div>
                    </div>
                    <div className="content-description-profile-row">
                        <div className="content-description-profile-contacts">
                            <p>Contacts:</p>
                            <ul>
                                {
                                    Object.keys(props.profile.contacts).map((oneKey,i)=>{
                                        return (
                                            <li key={i}>{props.profile.contacts[oneKey]}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;