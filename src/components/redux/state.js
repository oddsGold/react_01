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
        ]
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
        this.renderTree(this._state);
    },
    changeNewPost: function (modifiedMessage) {
        this._state.tempMessage = modifiedMessage;
        this.renderTree();
    },
    subscribe: function (observer){
        this.renderTree = observer;
    },
    getTempPost: function (){
        return this._state.tempMessage;
    },
    getPost: function (){
      return this._state.postsMessage;
    },
    getCurrentPerson: function (){
        return this._state.currentPerson;
    },
    getCurrentDialog: function (){
        return this._state.currentDialog;
    }
}

export default store;
