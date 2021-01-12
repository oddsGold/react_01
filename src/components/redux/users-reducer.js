import {usersAPI} from "../api/Api";
import {updateObjInArray} from "../content/Helpers/utils/helpers";

const SIGN_NEW_USER = 'SIGN-NEW-USER';
const UNSIGN_NEW_USER = 'UNSIGN-NEW-USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
    listUsers: [],
    pageSize: 10, //количество пользователей для отображения на одной страницы
    totalUsersCount: 0, //полное количество юзеров
    // currentPage: 1, //текущая страница,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_NEW_USER:
            return{
                ...state,
                listUsers: updateObjInArray(state.listUsers, action.userId, "id", {followed: false})
            }
        case UNSIGN_NEW_USER:
            return{
                ...state,
                listUsers: updateObjInArray(state.listUsers, action.userId, "id", {followed: true})
            }
        case SET_USERS:
            return {
                ...state,
                listUsers: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const signUser = (userId) => {
    return {
        type: SIGN_NEW_USER,
        userId: userId
    }
}
export const unsignUser = (userId) => {
    return {
        type: UNSIGN_NEW_USER,
        userId: userId
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setUsersCountActionCreator = (count) => {
    return {
        type: SET_USERS_COUNT,
        usersCount: count
    }
}
export const setIsFetchingActionCreator = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const getUresThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(setIsFetchingActionCreator(false));
        dispatch(setUsersActionCreator(data.items));
        dispatch(setUsersCountActionCreator(data.totalCount));

    }
} //Thunk

async function followUnfollow(dispatch, id, apiMethod, actionCreator) {
    dispatch(setFollowingProgress(true, id));
    let data = await apiMethod(id);

    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
    }

    dispatch(setFollowingProgress(false, id));
}

export const follow = (id) => {
    return async (dispatch) => {
        followUnfollow(dispatch,id,usersAPI.follow.bind(usersAPI),unsignUser);

    }
} //Thunk
export const unFollow = (id) => {
    return async (dispatch) => {
        followUnfollow(dispatch,id,usersAPI.unFollow.bind(usersAPI),signUser);
    }
} //Thunk

export default usersReducer;