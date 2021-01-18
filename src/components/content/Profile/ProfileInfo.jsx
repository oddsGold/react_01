import React from "react";
import '../Users/users.css'
import Preloader from "../../sections/preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo (props) {

    const downloadImage = (e) => {
        if (e.currentTarget.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    if (!props.profile){
        return <Preloader />
    }

    return(
        <div className="profileinfo">
            <div className="content-images">
                <img src="https://www.dstv.co.za/media/9937/dstv-now-profiles.png?mode=crop&width=750&height=500" alt=""/>
            </div>
            <div className="profileinfo-status">
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            <div className="content-description">
                <div className="content-description-profile">
                    <div className="content-description-profile-row">
                        <div className="content-description-profile-avatar">
                            <img className="content-description-profile-avatar-img" src={props.profile.photos.large || "https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png"} alt=""/>
                        </div>
                        <div className="content-description-profile-avatar-download">
                            {props.isOwner && <input type="file" onChange={downloadImage}/>}
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