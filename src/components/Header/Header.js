import s from './Header.module.css'
import SharinganIcon from './sharingan.png'

const Header = () => {
    return (
      <header className={s.header}>
        <img src={SharinganIcon}/>
      </header>
    )
}

export default Header;