import {usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const TO_EDIT_MODE = 'TO_EDIT_MODE';

let initialState = {
    postsMessage: [
        {
            id: 1,
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
            message: 'New post',
        },
        {
            id: 2,
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
            message: 'New post 2',
        }
    ],
    userProfile: null,
    status: "",
    editMode: false
}

function addNewPost(state, newPostBody) {
    let newPost = {
        id: 3,
        img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        message: newPostBody
    }
    return {
        ...state,
        postsMessage: [...state.postsMessage, newPost],
    };
}

function setUserProfile(state, profile) {
    // debugger;
    return {
        ...state,
        userProfile: profile
    }
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return addNewPost(state, action.newPostBody);
        case SET_USER_PROFILE:
            return setUserProfile(state, action.profile)
        case DELETE_POST:
            return {
                ...state,
                postsMessage: state.postsMessage.filter(p => p.id !== action.postId),
            }
        case SET_STATUS:
            if (action.status === null || action.status === "") {
                return {
                    ...state,
                    status: 'Status is null'
                }
            } else {
                return {
                    ...state,
                    status: action.status
                }
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: action.photos
                }
            }
        case TO_EDIT_MODE:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile
                },
                editMode: action.editModeParam
            }
        default:
            return state;
    }
}

export const addPost = (newPostBody) => {
    return {
        type: ADD_NEW_POST,
        newPostBody: newPostBody
    }
}
export const getUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId: postId
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos: photos
    }
}
export const toEditMode = (editModeParam) => {
    return {
        type: TO_EDIT_MODE,
        editModeParam: editModeParam
    }
}

export const usersProfileTC = (id) => {
    return (dispatch) => {
        usersAPI.usersProfile(id).then(data => {
            dispatch(getUserProfile(data));
        })
    }
} //Thunk Creator

export const getUserStatus = (id) => {
    return (dispatch) => {
        usersAPI.getStatus(id).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        usersAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await usersAPI.savePhoto(file);

        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {

        const userId = getState().auth.userId;
        let data = await usersAPI.saveProfile(profile);

        if (data.resultCode === 0) {
            dispatch(toEditMode(false));
            dispatch(usersProfileTC(userId))
        } else {
            dispatch(toEditMode(true));
            dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));

            // let inputsError = data.messages[0];
            // inputsError = inputsError.split("->");
            // let lastItem = inputsError[inputsError.length - 1];
            // lastItem = lastItem.split(")")
            // let firstItem = lastItem[0].toLowerCase();

            // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": data.messages[0]}}));
            // dispatch(stopSubmit("edit-profile", {
            //         "contacts": {
            //             firstItem: data.messages[0]
            //         }
            //     }
            // ));
        }
    }
}

export default postsReducer;