import React from "react";
import '../Users/users.css'
import Preloader from "../../sections/preloader";
import ProfileInfoData from "./ProfileInfoData";
import ProfileInfoDataForm from "./ProfileInfoDataForm";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
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
                                {props.isOwner && <input type="file" onChange={(e) => {
                                    props.savePhoto(e.target.files[0])
                                }}/>}
                            </div>
                        </div>
                        {props.editMode
                            ? <ProfileInfoDataForm initialValues={props.profile} profile={props.profile} onSubmit={props.onSubmit}/>
                            : <ProfileInfoData toEditMode={() => props.setEditMode(true)} profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;