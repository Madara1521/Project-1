import React from "react";
import hoshirama from './hoshirama.jpeg'
import styles from './users.module.css'

let ava = <img src={hoshirama} className={styles.userPhoto}/>

let Users = (props) => {

// if (props.users.length === 0) {
//     props.setUsers([
//         {
//             id: 1,
//             photoUrl: '',
//             followed: false,
//             fullName: 'Mykyta',
//             status: 'I am a boss',
//             location: {city: 'Sumy', country: 'Ukraine'}
//         },
//         {
//             id: 2,
//             photoUrl: '',
//             followed: true,
//             fullName: 'Dmitriy',
//             status: 'Ben',
//             location: {city: 'Kiev', country: 'Ukraine'}
//         },
//         {
//             id: 3,
//             photoUrl: '',
//             followed: false,
//             fullName: 'Stas',
//             status: 'Yes',
//             location: {city: 'Poltava', country: 'Ukraine'}
//         },
//         {
//             id: 4,
//             photoUrl: '',
//             followed: true,
//             fullName: 'Slavik',
//             status: 'No',
//             location: {city: 'Kharkow', country: 'Ukraine'}
//         }
//     ]
//     )
// }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                   <span>
                      <div>
                          {ava}
                      </div>
                      <div>
                          {u.followed
                              ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                              : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                      </div>
                   </span>
                    <span>
                      <div>{u.fullName}</div>
                      <div>{u.status}</div>
                    </span>
                    <span>
                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users