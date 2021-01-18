import {usersAPI} from "../api/Api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
    status: ""
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

function setUserProfile (state,  profile) {
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
            }else {
                return {
                    ...state,
                    status: action.status
                }
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
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
    return{
        type:SAVE_PHOTO_SUCCESS,
        photos: photos
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
            if(data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await usersAPI.savePhoto(file);

        if(data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.photos))
        }
    }
}

export default postsReducer;