const SIGN_NEW_USER = 'SIGN-NEW-USER';
const UNSIGN_NEW_USER = 'UNSIGN-NEW-USER';
const SET_USERS = 'SET_USERS';


let initialState = {
    listUsers: [
        {
            id: 1,
            follower: false,
            fullName: 'Dmitrii',
            status: 'Don\'t push me',
            location: {
                country: 'Ukraine',
                city: 'Kyiv'
            },
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        },
        {
            id: 2,
            follower: true,
            fullName: 'Nastya',
            status: 'Don\'t push me 2',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            },
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        },
        {
            id: 3,
            follower: false,
            fullName: 'Yasha',
            status: 'Don\'t push me',
            location: {
                country: 'Sri-Lanka',
                city: 'Colombo'
            },
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        },
        {
            id: 4,
            follower: true,
            fullName: 'Dmitrii 2',
            status: 'Don\'t push me 2',
            location: {
                country: 'Ukraine',
                city: 'Kyiv'
            },
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        },
    ],
}

function followNewUser (state, userId) {
    return  {
        ...state,
        listUsers: state.listUsers.map((user, i) => {
            if(user.id === userId) {
                return {
                    ...user,
                    follower: true
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
                    follower: false
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