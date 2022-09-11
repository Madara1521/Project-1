import s from './Post.module.css'
import avatar from './MadaraAva.jpeg'

const Post = (props) => {
    return <div className={s.item}>
<img src={avatar} />
        { props.message }
        <div>
        <span> likes: { props.like }</span>
        </div>
            </div>
}

export default Post