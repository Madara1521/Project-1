import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Kanoha from './Kanoha.jpg'
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />

            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile