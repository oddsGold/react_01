import {renderTree} from "./render";

let state = {
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
}

export let addNewPost = (postMessage) => {
    let newPost = {
        id: 3,
        img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        message: postMessage
    }

    state.postsMessage.push(newPost);
    renderTree();

}

export default state;