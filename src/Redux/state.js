let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 16},
                {id: 2, message: 'It\'s my first post', likesCount: 13}
            ],
            newPostText: ' '
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
    getState () {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText) {

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer //pattern observer
    }


}


export default store



