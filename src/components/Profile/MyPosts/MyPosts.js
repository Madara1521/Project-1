import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import AddNewPostForm from "./AddPostForm";

const MyPosts = React.memo(props => {
  console.log('RENDER!')

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
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
});

export default MyPosts