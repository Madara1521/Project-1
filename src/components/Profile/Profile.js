import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  <div className={s.content}>
        <div>
            <img src={'https://kartinkin.net/uploads/posts/2021-07/1625616711_9-kartinkin-com-p-arti-naruto-konokha-art-krasivo-10.jpg'} />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile