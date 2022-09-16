import {rerenderEntireTree} from "../Render";

let state = {
    profilePage : {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 16},
            {id: 2, message: 'It\'s my first post', likesCount: 13}
        ]
    },
    dialogsPage : {
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How is your neki4?'},
            {id: 3, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Slavik'},
            {id: 3, name: 'Stas'},
            {id: 4, name: 'Vlad'},
            {id: 5, name: 'Andreu'}
        ]
    }
}



export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state

