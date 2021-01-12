import {usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_USER_IMG = 'SET-CURRENT-USER-IMG';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false, //не залогинен -> true - залогинен
    currentUserImg: null
}

function setUserData(state, data) {
    return {
        ...state,
        ...data
    }
}

function setCurrentUser(state, userImg) {
    return {
        ...state,
        currentUserImg: userImg
    }
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return setUserData(state, action.data);
        case SET_CURRENT_USER_IMG:
            return setCurrentUser(state, action.userImg)
        default:
            return state;
    }
}

export const setUserDataAC = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}
export const setCurrentUserAC = (userImg) => {
    return {
        type: SET_CURRENT_USER_IMG,
        userImg: userImg
    }
}

export const getCurrentUserTC = () => {
    return (dispatch) => {
        return usersAPI.currentUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data; //деструктеризация
                    dispatch(setUserDataAC(id, email, login, true));
                }
            })
    }
} //Thunk
export const getCurrentUserDataTC = (userId) => {
    return (dispatch) => {
        usersAPI.currentUserData(userId)
            .then(data => {
                dispatch(setCurrentUserAC(data.photos.small));
            })
    }
} //Thunk

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await usersAPI.login(email, password, rememberMe);

        if (data.resultCode === 0) {
            dispatch(getCurrentUserTC())
        } else {
            dispatch(stopSubmit("login", {_error: data.messages[0]}));
        }


    }
}

export const logout = () => {
    return async dispatch => {
        let response = await usersAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false));
        }

    }
}


export default authReducer;