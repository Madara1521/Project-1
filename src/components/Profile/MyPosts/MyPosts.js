import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import { reduxForm} from "redux-form";
import AddNewPostForm from "./AddPostForm";


let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

const MyPosts = (props) => {


    let postsElements =
        props.posts.map(p => <Post message={p.message} like={p.likesCount}/>
        )

    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
          <h3>My posts</h3>
          <AddNewPostFormRedux onSubmit={onAddPost} />
          <div className={s.posts}>
            {postsElements}
          </div>
        </div>
    )
}

export default MyPosts