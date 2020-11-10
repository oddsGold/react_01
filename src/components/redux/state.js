import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            tempMessage: '',
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
    subscribe: function (observer){
        this.renderTree = observer;
    },

    getState: function (){
        return this._state;
    },


    dispatch: function (action){
        this._state.profilePage = postsReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.renderTree();
    }

}

export default store;
