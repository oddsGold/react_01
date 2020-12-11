import {usersAPI} from "../api/Api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    tempMessage: '',
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
    status: ''
}

function addNewPost(state) {
    let newPost = {
        id: 3,
        img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        message: state.tempMessage
    }
    return {
        ...state,
        postsMessage: [...state.postsMessage, newPost],
        tempMessage: '',
    };
}

function changeNewPost(state, modifiedMessage) {
    return {
        ...state,
        tempMessage: modifiedMessage
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
            return addNewPost(state);
        case CHANGE_NEW_POST:
            return changeNewPost(state, action.text);
        case SET_USER_PROFILE:
            return setUserProfile(state, action.profile)
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
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_NEW_POST
    }
}
export const postChange = (modifiedMessage) => {
    return {
        type: CHANGE_NEW_POST,
        text: modifiedMessage
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
                dispatch(setStatus(data))
            }
        })
    }
}

export default postsReducer;