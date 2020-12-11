import React, {useState} from "react";

function ProfileStatus(props) {
    const [editMode, getStatus] = useState(false);
    const [localStatus, setStatus] = useState(props.status);

    let deactivateEditMode = () => {
        getStatus(false)
        props.updateUserStatus(localStatus);
    }

    return (
        <div className='profileinfo-status-item'>
            {!editMode &&
            <div>
                <span>
                    Status:
                </span>
                <span onClick={() => getStatus(true)}>
                    {props.status}
                </span>
            </div>
            }
            {editMode &&
            <div>
                <input type="text" value={localStatus} autoFocus={true} onBlur={() => deactivateEditMode()} onChange={e => setStatus(e.target.value)}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;
