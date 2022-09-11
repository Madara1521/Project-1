import s from './Profile.module.css'

const Profile = () => {
    return  <div className={s.content}>
        <div>
            <img src={'https://kartinkin.net/uploads/posts/2021-07/1625616711_9-kartinkin-com-p-arti-naruto-konokha-art-krasivo-10.jpg'} />
        </div>
        <div>
            ava + description
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>
        </div>
    </div>
}

export default Profile