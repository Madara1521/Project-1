const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 16},
                {id: 2, message: 'It\'s my first post', likesCount: 13}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How is your nek?'},
                {id: 3, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Sla'},
                {id: 3, name: 'Gus'},
                {id: 4, name: 'Vlad'},
                {id: 5, name: 'Andreu'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer //pattern observer
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }


}


export const addPostActionCreator = () => {
    return {ADD_POST}

}
export const updateNEwPostActionCreator = (text) => {
    return {UPDATE_NEW_POST_TEXT, newText: text}
}

export default store



