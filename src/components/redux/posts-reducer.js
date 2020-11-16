const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

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
}

function addNewPost(state) {
    let newPost = {
        id: 3,
        img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        message: state.tempMessage
    }
    let stateCopy = {...state};
    stateCopy.postsMessage = [...state.postsMessage];
    stateCopy.postsMessage.push(newPost);
    stateCopy.tempMessage = '';
    return stateCopy;
}

function changeNewPost(state, modifiedMessage) {
    let stateCopy = {...state};
    stateCopy.tempMessage = modifiedMessage;
    return stateCopy;
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return addNewPost(state);
        case CHANGE_NEW_POST:
            return changeNewPost(state, action.text);
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => {
    return {
        type: ADD_NEW_POST
    }
}
export const changeNewPostActionCreator = (modifiedMessage) => {
    return {
        type: CHANGE_NEW_POST,
        text: modifiedMessage
    }
}

export default postsReducer;