const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

function addNewPost (state){
    let newPost = {
        id: 3,
        img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        message: state.tempMessage
    }
    state.postsMessage.push(newPost);
    state.tempMessage = '';
    debugger;
    return state;
}
function changeNewPost (state, modifiedMessage) {
    state.tempMessage = modifiedMessage;
}

const postsReducer = (state, action) => {
    if(action.type === 'ADD-NEW-POST'){
        addNewPost(state);
    }else if (action.type === 'CHANGE-NEW-POST'){
        changeNewPost(state, action.text);
    }

    return state;
}

export default postsReducer;