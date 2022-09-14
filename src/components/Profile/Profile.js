import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Kanoha from './Kanoha.jpg'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts/>
        </div>
    )
}

export default Profile