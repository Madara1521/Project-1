import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer