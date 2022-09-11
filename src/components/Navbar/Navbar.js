import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a className={s.item}>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>Settings</div>
    </nav>
}

export default Navbar