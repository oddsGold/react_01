const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

let store = {
    _state: {
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
        tempMessage: '',
        dialogsPage: {
            currentPerson: [
                {id:1, name: 'Dima 1'},
                {id:2, name: 'Dima 2'},
                {id:3, name: 'Dima 3'},
                {id:4, name: 'Dima 4'},
                {id:5, name: 'Dima 5'},
                {id:6, name: 'Dima 6'},
            ],
            currentDialog: [
                {id:1, massage: 'Hi', answer: 'Hello'},
                {id:2, massage: 'My name is Vasya', answer: 'Hi, Vasya'},
                {id:3, massage: 'My name is Vova', answer: 'Hello, Vova'},
                {id:4, massage: 'Hi. My name is Katya', answer: 'Who are you?'},
                {id:5, massage: 'Lorem ipsum dolor ', answer: 'Are you good?'},
                {id:6, massage: 'ng elit. Facilis, unde!6', answer: 'I am fine!'},
            ],
        }
    },
    renderTree: function () {},
    addNewPost: function (){
        let newPost = {
            id: 3,
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
            message: this._state.tempMessage
        }
        this._state.postsMessage.push(newPost);
        this._state.tempMessage = '';
        this.renderTree();
    },
    changeNewPost: function (modifiedMessage) {
        this._state.tempMessage = modifiedMessage;
        this.renderTree();
    },
    addNewMessage: function (){
        let newMess = {
            id:1,
            massage: this._state.tempMessage,
            answer: 'I am fine!'
        }
        this._state.dialogsPage.currentDialog.push(newMess);
        this._state.tempMessage = '';
        this.renderTree();
    },
    changeNewMessage: function (message){
        this._state.tempMessage = message;
        this.renderTree();
    },
    subscribe: function (observer){
        this.renderTree = observer;
    },

    getState: function (){
        return this._state;
    },

    // Стоит ли так делать?
    dispatch: function (action){
        if(action.type === 'ADD-NEW-POST'){
            this.addNewPost();
        }else if (action.type === 'CHANGE-NEW-POST'){
            this.changeNewPost(action.text);
        }else if (action.type === 'ADD-NEW-MESSAGE'){
            this.addNewMessage();
        }else if (action.type === 'CHANGE-NEW-MESSAGE') {
            this.changeNewMessage(action.text);
        }
    }
    //
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
export const addNewMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE
    }
}
export const changeNewMessageActionCreator = (message) => {
    return {
        type: CHANGE_NEW_MESSAGE,
        text: message
    }
}

export default store;
