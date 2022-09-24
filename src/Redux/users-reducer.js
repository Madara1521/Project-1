const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'



let initialState = {
    users: [
        {
            id: 1,
            photoUrl: '',
            followed: false,
            fullName: 'Mykyta',
            status: 'I am a boss',
            location: {city: 'Sumy', country: 'Ukraine'}
        },
        {id: 2,photoUrl: '', followed: true, fullName: 'Dmitriy', status: 'Ben', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3,photoUrl: '', followed: false, fullName: 'Stas', status: 'Yes', location: {city: 'Poltava', country: 'Ukraine'}},
        {id: 4,photoUrl: '', followed: true, fullName: 'Slavik', status: 'No', location: {city: 'Kharkow', country: 'Ukraine'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer