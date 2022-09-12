import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Kanoha from './Kanoha.jpg'

const Profile = () => {
    return  <div>
        <div>
            <img src={Kanoha}  alt={'kanoha.jpg'}/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile