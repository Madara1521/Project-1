import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <div>
            <NavLink to={'/profile'} className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <br/>
        <div>
            <NavLink to={'/dialogs'} className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <br/>
        <div >
            <NavLink to={'/news'} className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
        </div>
        <br/>
        <div>
            <NavLink to={'/music'} className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <br/>
        <div>
            <NavLink to={'/settings'} className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
        </div>
    </nav>
    )
}


export default Navbar