const SIGN_NEW_USER = 'SIGN-NEW-USER';
const UNSIGN_NEW_USER = 'UNSIGN-NEW-USER';
const SET_USERS = 'SET_USERS';


let initialState = {
    listUsers: []
}

function followNewUser (state, userId) {
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

function unfollowNewUser (state, userId) {
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

function setUsers (state,  users) {
    return {
        ...state,
        listUsers: [...state.listUsers, ...users]
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

export default usersReducer;