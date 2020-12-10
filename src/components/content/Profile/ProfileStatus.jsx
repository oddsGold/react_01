import React, {useState} from "react";

function ProfileStatus(props) {

    const [editMode, getStatus] = useState(false);

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
                <input type="text" value={props.status} autoFocus={true} onBlur={() => getStatus(false)}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;
