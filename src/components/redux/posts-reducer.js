const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

let initialState = {
    tempMessage: 'dfgdfgdf',
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
    state.postsMessage.push(newPost);
    state.tempMessage = '';
}

function changeNewPost(state, modifiedMessage) {
    state.tempMessage = modifiedMessage;
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            addNewPost(state);
            return state;
        case CHANGE_NEW_POST:
            changeNewPost(state, action.text);
            return state;
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