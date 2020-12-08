const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_USER_IMG = 'SET-CURRENT-USER-IMG';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false, //не залогинен -> true - залогинен
    currentUserImg: ''
}

function setUserData (state, data) {
    return  {
        ...state,
        ...data,
        isAuth: true
    }
}
function setCurrentUser (state, userImg) {
    return {
        ...state,
        currentUser: userImg
    }
}


const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return setUserData(state, action.data);
        case SET_CURRENT_USER_IMG:
            return setCurrentUser(state, action.userImg)
        default: return state;
    }
}

export const setUserDataAC = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}
export const setCurrentUserAC = (userImg) => {
    return {
        type: SET_CURRENT_USER_IMG,
        userImg: userImg
    }
}

export default authReducer;