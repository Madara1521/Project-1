import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import AddNewPostForm from "./AddPostForm";

const MyPosts = React.memo(props => {
  let postsElements =
    [...props.posts]
      .reverse()
      .map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>
      )

  let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
});

export default MyPosts