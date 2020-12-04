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

function followNewUser (state, userId) {
    return  {
        ...state,
        listUsers: state.listUsers.map((user, i) => {
            if(user.id === userId) {
                return {
                    ...user,
                    followed: false
                }
            }
            return user;
        })
    }
}

function unfollowNewUser (state, userId) {
    return  {
        ...state,
        listUsers: state.listUsers.map((user, i) => {
            if(user.id === userId) {
                return {
                    ...user,
                    followed: true
                }
            }
            return user;
        })
    }
}

function setUsers (state,  users) {
    return {
        ...state,
        listUsers: users
    }
}

function setCurrentPage(state, currentPage){
    return {
        ...state,
        currentPage: currentPage
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGN_NEW_USER:
            return followNewUser(state, action.userId);
        case UNSIGN_NEW_USER:
            return unfollowNewUser(state, action.userId);
        case SET_USERS:
            return setUsers(state, action.users);
        case SET_CURRENT_PAGE:
            return setCurrentPage(state, action.currentPage);
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
        default: return state;
    }
}

export const signNewUserActionCreator = (userId) => {
    return {
        type: SIGN_NEW_USER,
        userId: userId
    }
}

export const unsignNewUserActionCreator = (userId) => {
    return {
        type: UNSIGN_NEW_USER,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPageCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setUsersCountActionCreator = (count) => {
    return{
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

export const setFollowingProgressActionCreator = (isFetching,userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

export default usersReducer;